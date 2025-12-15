import { getCachedRecentPosts, getCategoryIdByName, fetchPosts } from '@/lib/wordpress';
import blogCategories from '@/data/blogCategories.json';
import BlogList from '@/components/blog-03/BlogList';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Find category from JSON by slug
  const category = blogCategories.find(
    cat => cat.wpCategory.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const categoryName = category?.label || 'Category';

  return {
    title: `${categoryName} - Blog - Boostifai`,
    description: `Browse all blog posts in ${categoryName} category`,
  };
}

// Enable dynamic rendering for category pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    // Generate static paths for all categories
    return blogCategories.map((cat) => ({
      slug: cat.url.replace('/blog/category/', ''), // Extract slug from URL
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || '1');

  // Find category from JSON by URL slug
  const category = blogCategories.find(
    cat => cat.url === `/blog/category/${slug}`
  );

  if (!category) {
    notFound();
  }

  // Get category ID from WordPress
  const categoryId = await getCategoryIdByName(category.wpCategory);

  if (!categoryId) {
    notFound();
  }

  const postsPerPage = 10;

  // Fetch posts for this category
  const { data: blogs, total, totalPages } = await fetchPosts({
    page,
    perPage: postsPerPage,
    categoryId,
  });

  // Get cached recent posts
  const recentBlogs = await getCachedRecentPosts();

  // Use categories from JSON file
  const categories = blogCategories.map((cat, index) => ({
    id: index + 1,
    name: cat.label,
    slug: cat.url.replace('/blog/category/', ''), // Extract slug from URL
    count: 0,
  }));

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <BlogList
          blogs={blogs}
          wpCategories={categories}
          recentBlogs={recentBlogs}
          currentPage={page}
          totalPages={totalPages}
          totalPosts={total}
          categoryName={category.label}
        />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default CategoryPage;
