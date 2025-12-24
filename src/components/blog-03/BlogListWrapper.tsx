import { fetchPosts, getCachedRecentPosts, getCategoryIdByName } from '@/lib/wordpress';
import { getBlogCategories } from '@/data/blogCategories';
import BlogList from './BlogList';

interface BlogListWrapperProps {
  searchParams?: {
    page?: string;
    category?: string;
    search?: string;
  };
  locale: 'en' | 'nl';
}

const BlogListWrapper = async ({ searchParams, locale }: BlogListWrapperProps) => {
  const page = parseInt(searchParams?.page || '1');
  const category = searchParams?.category || '';
  const search = searchParams?.search || '';

  const postsPerPage = 10;
  let categoryId: number | null = null;

  // Get category ID if filtering by category
  if (category) {
    categoryId = await getCategoryIdByName(category);
  }

  // Fetch posts with category filter and language (WordPress API handles it server-side)
  const { data: blogs, total, totalPages } = await fetchPosts({
    page,
    perPage: postsPerPage,
    search: search || undefined,
    categoryId: categoryId || undefined,
    lang: locale,
  });

  // Get cached recent posts for the current language
  const recentBlogs = await getCachedRecentPosts(locale);

  // Get language-specific categories
  const blogCategories = getBlogCategories(locale);
  const categories = blogCategories.map((cat, index) => ({
    id: index + 1,
    name: cat.label,
    slug: cat.url.replace('/blog/category/', ''), // Extract slug from URL
    count: 0,
  }));

  return (
    <BlogList
      blogs={blogs}
      wpCategories={categories}
      recentBlogs={recentBlogs}
      currentPage={page}
      totalPages={totalPages}
      totalPosts={total}
    />
  );
};

export default BlogListWrapper;
