import { fetchPostBySlug, fetchPostContent, fetchPosts, getCachedRecentPosts } from '@/lib/wordpress';
import BlogContent from '@/components/blod-details/BlogContent';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { getBlogCategories } from '@/data/blogCategories';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { generateAlternates } from '@/utils/generateAlternates';

interface BlogDetailPageProps {
  params: Promise<{ slug: string; locale: 'en' | 'nl' }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Not Found - Boostifai',
    };
  }

  return {
    title: `${post.title} - Boostifai Blog`,
    description: post.description,
    alternates: generateAlternates(locale, `/blog/${slug}`),
  };
}

// Enable dynamic rendering for blog posts
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const { data: posts } = await fetchPosts({ perPage: 50 });
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    // Return empty array to allow dynamic rendering
    return [];
  }
}

const BlogDetails = async ({ params }: BlogDetailPageProps) => {
  const { slug, locale } = await params;
  const blogContent = await fetchPostContent(slug);

  if (!blogContent) {
    notFound();
  }

  // Check if the post has the correct language by fetching posts for this language
  // and checking if this post ID exists in that language's posts
  try {
    const { data: postsInLocale } = await fetchPosts({ 
      perPage: 1, 
      lang: locale,
      // We can't filter by ID directly, so we'll check after fetching
    });
    
    // Extract the WordPress ID from the slug
    const lastDashIndex = slug.lastIndexOf('-');
    const postId = slug.substring(lastDashIndex + 1);
    
    // Verify this post exists in the current language
    // by checking if we can fetch it with the language filter
    const { data: verifyPost } = await fetchPosts({
      perPage: 100,
      lang: locale,
    });
    
    const postExistsInLanguage = verifyPost.some(p => p.wpId?.toString() === postId);
    
    if (!postExistsInLanguage) {
      // Post doesn't exist in this language, redirect to blog list
      redirect(`/${locale}/blog`);
    }
  } catch (error) {
    console.error('Error verifying post language:', error);
    // If verification fails, redirect to be safe
    redirect(`/${locale}/blog`);
  }

  // Get cached recent posts for sidebar
  const recentBlogs = await getCachedRecentPosts(locale);

  // Get language-specific categories
  const blogCategories = getBlogCategories(locale);
  const categories = blogCategories.map((cat, index) => ({
    id: index + 1,
    name: cat.label,
    slug: cat.url.replace('/blog/category/', ''),
    count: 0,
  }));

  return (
    <>
       <NavbarOne
              className="border border-white backdrop-blur-[25px]"
              btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
            />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Blog" heading="Blog" />
        <BlogContent blog={blogContent} wpCategories={categories} recentBlogs={recentBlogs} />
          <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default BlogDetails;
