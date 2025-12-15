'use client';

import { IBlogPost } from '@/interface';
import { WPCategory } from '@/types/wordpress';
import { useRouter, useSearchParams } from 'next/navigation';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import Heading from './Heading';

interface BlogListProps {
  blogs: IBlogPost[];
  wpCategories: WPCategory[];
  recentBlogs: IBlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  categoryName?: string; // Optional category name for category pages
}

const BlogList = ({ blogs: allBlogs, wpCategories, recentBlogs, currentPage, totalPages, totalPosts, categoryName }: BlogListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // No client-side filtering - blogs are already filtered server-side
  const currentBlogs = allBlogs;

  // Determine selected category from URL
  const selectedCategory = categoryName || 'all';

  // Update URL when filters change
  const updateURL = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === 'all' || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 when filters change
    if (updates.search !== undefined || updates.category !== undefined) {
      params.delete('page');
    }

    const newURL = params.toString() ? `?${params.toString()}` : '';

    // Use window.history.replaceState for more reliable URL updates
    const fullURL = window.location.pathname + (newURL ? newURL : '');
    window.history.replaceState({}, '', fullURL);

    // Also update the router state
    router.replace(newURL, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    updateURL({ page: page.toString() });
    window.scrollTo({ top: 210, behavior: 'smooth' });
  };

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-30">
      <div className="main-container">
        <Heading />

        {/* Blog List */}
        <div className="grid grid-cols-12 max-md:gap-y-20 md:gap-5 lg:gap-16">
          {/* Main Blog Content */}
          <div className="max-md:col-span-full max-lg:col-span-7 lg:col-span-8 max-md:order-2 max-w-[793px] space-y-14 md:space-y-[70px] relative">
            {/* Category Page Indicator */}
            {categoryName && (
              <div className="mb-8 -mt-4">
                <p className="text-tagline-1 text-secondary dark:text-accent">
                  Category: <span className="font-semibold">{categoryName}</span>
                  {totalPosts > 0 && <span className="text-secondary/60 dark:text-accent/60"> ({totalPosts} {totalPosts === 1 ? 'post' : 'posts'})</span>}
                </p>
                <button
                  onClick={() => router.push('/blog')}
                  className="text-primary-500 hover:text-primary-600 dark:text-accent dark:hover:text-accent/80 text-tagline-2 font-medium mt-2 inline-flex items-center gap-1 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 4L6 8L10 12"
                      className="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View all posts
                </button>
              </div>
            )}

            {/* Search Results Indicator */}
            {searchParams.get('search') && (
              <div className="mb-8 -mt-4">
                <p className="text-tagline-1 text-secondary dark:text-accent">
                  Showing results for <span className="font-semibold">&quot;{searchParams.get('search')}&quot;</span>
                  {totalPosts > 0 && <span className="text-secondary/60 dark:text-accent/60"> ({totalPosts} {totalPosts === 1 ? 'result' : 'results'})</span>}
                </p>
                <button
                  onClick={() => router.push('/blog')}
                  className="text-primary-500 hover:text-primary-600 dark:text-accent dark:hover:text-accent/80 text-tagline-2 font-medium mt-2 inline-flex items-center gap-1 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 4L6 8L10 12"
                      className="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Clear search
                </button>
              </div>
            )}

            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog, index) => (
                <RevealAnimation key={blog.slug} delay={0.1 + index * 0.1}>
                  <div>
                    <BlogCard blog={blog} />
                  </div>
                </RevealAnimation>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-heading-4 mb-4">No blogs found</h3>
                <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                  {searchParams.get('search') 
                    ? `No results found for "${searchParams.get('search')}". Try a different search term.`
                    : 'Try adjusting your search or filter criteria'}
                </p>
              </div>
            )}
          </div>

          {/* Blog List Sidebar */}
          <BlogSidebar wpCategories={wpCategories} recentBlogs={recentBlogs} selectedCategory={selectedCategory} />
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <RevealAnimation delay={0.2}>
            <div className="flex items-center justify-center mt-14 gap-4">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-6 py-3 border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-500 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-secondary dark:disabled:hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path
                    d="M12.5 6H1.5M1.5 6L6 1.5M1.5 6L6 10.5"
                    className="stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-tagline-2 font-medium">Previous</span>
              </button>

              {/* Page Info */}
              <span className="text-tagline-2 font-medium text-secondary dark:text-accent">
                Page {currentPage} of {totalPages}
              </span>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-6 py-3 border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 hover:text-white hover:border-primary-500 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-secondary dark:disabled:hover:text-accent">
                <span className="text-tagline-2 font-medium">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path
                    d="M1.5 6H12.5M12.5 6L8 1.5M12.5 6L8 10.5"
                    className="stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default BlogList;
