import { fetchPostBySlug, fetchPostContent, fetchPosts, getCachedRecentPosts } from '@/lib/wordpress';
import BlogContent from '@/components/blod-details/BlogContent';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import blogCategories from '@/data/blogCategories.json';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Not Found - NextSaaS',
    };
  }

  return {
    title: `${post.title} - NextSaaS Blog`,
    description: post.description,
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
  const { slug } = await params;
  const blogContent = await fetchPostContent(slug);

  if (!blogContent) {
    notFound();
  }

  // Get cached recent posts for sidebar
  const recentBlogs = await getCachedRecentPosts();

  // Use categories from JSON file
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
