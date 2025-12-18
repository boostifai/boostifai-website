import { IBlogPost } from '@/interface';
import { WPAPIResponse, WPCategory, WPPost } from '@/types/wordpress';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://wp.boostifai.com/wp-json/wp/v2';

// Calculate read time from content
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Extract first image from HTML content
function extractFirstImage(htmlContent: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = htmlContent.match(imgRegex);
  return match ? match[1] : null;
}

// Transform WordPress post to IBlogPost
async function transformWPPost(post: WPPost): Promise<IBlogPost> {
  const author = post._embedded?.author?.[0];
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  
  // Categories are in post.categories array (IDs), need to fetch category names
  let categoryNames: string[] = [];
  let primaryCategory = 'Uncategorized';
  
  if (post.categories && post.categories.length > 0) {
    // Fetch category details from the IDs
    try {
      const categoryPromises = post.categories.map(async (catId) => {
        const response = await fetch(`${WP_API_URL}/categories/${catId}`, {
          next: { revalidate: 3600 }, // Cache for 1 hour
        });
        if (response.ok) {
          const cat = await response.json();
          return cat.name;
        }
        return null;
      });
      
      const names = await Promise.all(categoryPromises);
      categoryNames = names.filter((name): name is string => name !== null);
      
      // Get primary category (first one that's not "Uncategorized")
      primaryCategory = categoryNames.find(name => name !== 'Uncategorized') || categoryNames[0] || 'Uncategorized';
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
  

  
  // Get thumbnail: featured image > first image in content > default
  let thumbnail = featuredMedia?.source_url;
  if (!thumbnail) {
    thumbnail = extractFirstImage(post.content.rendered) || '/images/blog/default-thumbnail.jpg';
  }
  
  // Find category URL from blogCategories.json
  let categoryUrl = '';
  try {
    const blogCategoriesModule = await import('@/data/blogCategories.json');
    const blogCategories = blogCategoriesModule.default;
    const categoryConfig = blogCategories.find((cat: { label: string; url: string; wpCategory: string }) => 
      cat.wpCategory.toLowerCase() === primaryCategory.toLowerCase()
    );
    categoryUrl = categoryConfig?.url || '';
  } catch (error) {
    console.error('Error loading category config:', error);
  }

  return {
    slug: `${post.slug}-${post.id}`, // Add ID to ensure uniqueness
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    content: post.content.rendered,
    thumbnail,
    tag: primaryCategory,
    categoryUrl, // Add category URL for linking
    categories: categoryNames, // Store all categories for filtering
    author: author?.name || 'Anonymous',
    authorImage: author?.avatar_urls?.['96'] || '/images/avatar/default.jpg',
    publishDate: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: calculateReadTime(post.content.rendered),
    wpId: post.id, // Store original WordPress ID
    wpSlug: post.slug, // Store original WordPress slug
  };
}

// Fetch posts with optional filters
export async function fetchPosts(params?: {
  page?: number;
  perPage?: number;
  search?: string;
  categoryId?: number; // Category ID for filtering
  excludeEmbed?: boolean; // Option to exclude embed for lighter requests
  lang?: string; // Language code for Polylang (e.g., 'en', 'nl')
}): Promise<WPAPIResponse<IBlogPost[]>> {
  const { page = 1, perPage = 10, search, categoryId, excludeEmbed = false, lang } = params || {};
  
  const queryParams = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });

  // Only add embed if not excluded - use simple format
  if (!excludeEmbed) {
    queryParams.append('_embed', 'true');
  }

  if (search) {
    queryParams.append('search', search);
  }

  // Filter by category ID (WordPress REST API requires ID, not name)
  if (categoryId) {
    queryParams.append('categories', categoryId.toString());
  }

  // Filter by language (Polylang support)
  if (lang) {
    queryParams.append('lang', lang);
  }

  const url = `${WP_API_URL}/posts?${queryParams.toString()}`;

  console.log('🔍 Fetching WordPress posts:', url);
  console.log('📝 Query params:', Object.fromEntries(queryParams));
  
  // NOTE: For Polylang language filtering to work, you need one of the following on WordPress:
  // 1. Polylang Pro (paid version with REST API support)
  // 2. "Polylang REST API" plugin (free)
  // 3. Custom code in functions.php to register language taxonomy with REST API

  try {
    // In development, we might need to handle SSL certificate issues
    // For production, ensure wp.boostifai.com has a valid SSL certificate
    const fetchOptions: RequestInit = {
      next: { revalidate: 300 }, // ISR: Revalidate every 5 minutes to reduce API calls
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      if (response.status === 429) {
        console.warn('WordPress API rate limit hit, returning empty results');
        return {
          data: [],
          total: 0,
          totalPages: 0,
        };
      }
      const errorText = await response.text();
      console.error('WordPress API error:', response.status, errorText);
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WPPost[] = await response.json();
    console.log('Fetched posts count:', posts.length);
    
    // Debug: Check the structure of embedded data
    if (posts.length > 0) {
      console.log('First post _embedded keys:', Object.keys(posts[0]._embedded || {}));
      console.log('First post _embedded wp:term:', posts[0]._embedded?.['wp:term']);
      console.log('First post categories field:', posts[0].categories);
      console.log('First post keys:', Object.keys(posts[0]).filter(k => k.includes('cat') || k.includes('term') || k.includes('tax')));
    }
    
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    console.log('Total posts:', total, 'Total pages:', totalPages);

    const transformedPosts = await Promise.all(posts.map(transformWPPost));
    
    return {
      data: transformedPosts,
      total,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}

// Fetch all posts (paginated internally to avoid cache issues)
export async function fetchAllPosts(lang?: string): Promise<IBlogPost[]> {
  const allPosts: IBlogPost[] = [];
  let page = 1;
  let hasMore = true;
  const maxPages = 10; // Increased to 10 pages * 100 = 1000 posts max

  console.log('Starting to fetch all posts...', lang ? `Language: ${lang}` : '');

  while (hasMore && page <= maxPages) {
    try {
      const { data, totalPages, total } = await fetchPosts({ page, perPage: 100, lang });
      
      console.log(`Fetched page ${page}/${totalPages}, got ${data.length} posts, total: ${total}`);
      
      if (data.length === 0) {
        break;
      }
      
      allPosts.push(...data);
      hasMore = page < totalPages;
      page++;
      
      // Add small delay between requests to avoid rate limiting
      if (hasMore && page <= maxPages) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      break; // Stop on error to prevent further rate limiting
    }
  }

  console.log(`Finished fetching. Total posts: ${allPosts.length}`);
  
  // Log category distribution
  const categoryCount = new Map<string, number>();
  allPosts.forEach(post => {
    if (post.categories) {
      post.categories.forEach((cat: string) => {
        categoryCount.set(cat, (categoryCount.get(cat) || 0) + 1);
      });
    }
  });
  console.log('Category distribution:', Object.fromEntries(categoryCount));

  return allPosts;
}

// Fetch single post by slug (handles both slug-id and slug formats)
export async function fetchPostBySlug(slug: string): Promise<IBlogPost | null> {
  try {
    // Extract WordPress ID from slug (format: slug-name-123)
    const lastDashIndex = slug.lastIndexOf('-');
    const possibleId = slug.substring(lastDashIndex + 1);
    
    console.log('Fetching post with slug:', slug, 'Extracted ID:', possibleId);
    
    // Check if the last part is a number (WordPress ID)
    if (/^\d+$/.test(possibleId)) {
      // Fetch by ID for exact match
      const url = `${WP_API_URL}/posts/${possibleId}?_embed=true`;
      console.log('Fetching by ID:', url);
      
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        console.error(`WordPress API error: ${response.status}`);
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const post: WPPost = await response.json();
      console.log('Successfully fetched post:', post.id, post.title.rendered);
      return transformWPPost(post);
    } else {
      // Fallback: fetch by slug (for posts without ID suffix)
      const url = `${WP_API_URL}/posts?slug=${slug}&_embed=true`;
      console.log('Fetching by slug:', url);
      
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        console.error(`WordPress API error: ${response.status}`);
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const posts: WPPost[] = await response.json();
      
      if (posts.length === 0) {
        console.error('No posts found for slug:', slug);
        return null;
      }

      console.log('Successfully fetched post:', posts[0].id, posts[0].title.rendered);
      return transformWPPost(posts[0]);
    }
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

// Fetch post in markdown-compatible format (for BlogContent component)
export async function fetchPostContent(slug: string): Promise<{ data: IBlogPost; content: string } | null> {
  try {
    // Extract WordPress ID from slug (format: slug-name-123)
    const lastDashIndex = slug.lastIndexOf('-');
    const possibleId = slug.substring(lastDashIndex + 1);
    
    console.log('Fetching post content with slug:', slug, 'Extracted ID:', possibleId);
    
    let post: WPPost;
    
    // Check if the last part is a number (WordPress ID)
    if (/^\d+$/.test(possibleId)) {
      // Fetch by ID for exact match
      const url = `${WP_API_URL}/posts/${possibleId}?_embed=true`;
      console.log('Fetching content by ID:', url);
      
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        console.error(`WordPress API error: ${response.status}`);
        throw new Error(`WordPress API error: ${response.status}`);
      }

      post = await response.json();
    } else {
      // Fallback: fetch by slug (for posts without ID suffix)
      const url = `${WP_API_URL}/posts?slug=${slug}&_embed=true`;
      console.log('Fetching content by slug:', url);
      
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        console.error(`WordPress API error: ${response.status}`);
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const posts: WPPost[] = await response.json();
      
      if (posts.length === 0) {
        console.error('No posts found for slug:', slug);
        return null;
      }
      
      post = posts[0];
    }

    console.log('Successfully fetched post content:', post.id, post.title.rendered);
    const transformedPost = await transformWPPost(post);
    
    // Return in markdown-compatible format
    return {
      data: {
        ...transformedPost,
        authorName: transformedPost.author, // Map author to authorName for compatibility
      },
      content: transformedPost.content,
    };
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

// Fetch categories
export async function fetchCategories(): Promise<WPCategory[]> {
  try {
    const response = await fetch(`${WP_API_URL}/categories?per_page=100`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const categories: WPCategory[] = await response.json();
    return categories.filter((cat) => cat.count > 0); // Only return categories with posts
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}

// Get category ID by name
export async function getCategoryIdByName(categoryName: string): Promise<number | null> {
  try {
    const categories = await fetchCategories();
    const category = categories.find(cat => 
      cat.name.toLowerCase() === categoryName.toLowerCase()
    );
    return category ? category.id : null;
  } catch (error) {
    console.error('Error getting category ID:', error);
    return null;
  }
}

// Helper function to get recent posts (for homepage sections)
export async function getRecentPosts(limit: number = 3, offset: number = 0, lang?: string): Promise<IBlogPost[]> {
  const { data } = await fetchPosts({ perPage: limit + offset, lang });
  return data.slice(offset, offset + limit);
}

// Cached function to get recent posts for sidebar (called once per build/revalidation)
const cachedRecentPostsByLang: Map<string, { posts: IBlogPost[]; time: number }> = new Map();
const CACHE_DURATION = 300000; // 5 minutes

export async function getCachedRecentPosts(lang?: string): Promise<IBlogPost[]> {
  const cacheKey = lang || 'default';
  const now = Date.now();
  const cached = cachedRecentPostsByLang.get(cacheKey);
  
  if (cached && (now - cached.time) < CACHE_DURATION) {
    return cached.posts;
  }
  
  const { data } = await fetchPosts({ page: 1, perPage: 5, lang });
  cachedRecentPostsByLang.set(cacheKey, { posts: data, time: now });
  return data;
}
