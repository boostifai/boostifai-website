import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import BlogSidebar from '../blog-03/BlogSidebar';
import ShareLink from './ShareLink';
import blogCategories from '@/data/blogCategories.json';

interface BlogContentProps {
  blog: Partial<IBlogPost> & { content: string };
  wpCategories?: { id: number; name: string; slug: string; count: number }[];
  recentBlogs?: IBlogPost[];
}

// Helper function to get category URL
const getCategoryUrl = (categoryName: string): string => {
  const category = blogCategories.find(
    (cat) => cat.wpCategory.toLowerCase() === categoryName.toLowerCase()
  );
  return category?.url || '/blog';
};

const BlogContent = ({ blog, wpCategories, recentBlogs }: BlogContentProps) => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 max-md:gap-y-20 md:gap-5 lg:gap-16">
          {/* Main Blog Content */}
          <div className="max-md:col-span-full max-lg:col-span-7 lg:col-span-8 max-md:order-2 max-w-[793px]">
            <div className="space-y-3 max-w-[1209px]">
          {/* Categories - Show up to 4 above title */}
          {blog.data.categories && blog.data.categories.length > 0 && (
            <RevealAnimation delay={0.05}>
              <div className="flex items-center gap-2 flex-wrap">
                {blog.data.categories.slice(0, 3).map((category: string, index: number) => {
                  const categoryUrl = getCategoryUrl(category);
                  return (
                    <Link key={index} href={categoryUrl}>
                      <span className="badge bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600 font-medium transition-colors cursor-pointer">
                        {category}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </RevealAnimation>
          )}

          <RevealAnimation delay={0.1}>
            <h1 className="max-w-[884px]">{blog.data.title}</h1>
          </RevealAnimation>
          <div className="flex items-center gap-3">
            <RevealAnimation delay={0.2}>
              <figure className="size-12 rounded-full overflow-hidden bg-[#ECEAED]">
                <Image
                  src={blog.data.authorImage}
                  className="object-center object-cover"
                  alt="Esther Howard's avatar"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
            <div>
              <RevealAnimation delay={0.3}>
                <h3 className="text-tagline-1 font-medium">{blog.data.authorName}</h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <time
                  dateTime={blog.data.publishDate}
                  className="text-tagline-2 flex items-center gap-2 font-normal text-secondary/60 dark:text-accent/60">
                  {blog.data.publishDate} <span>•</span> {blog.data.readTime}
                </time>
              </RevealAnimation>
            </div>
          </div>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="max-w-full rounded-lg md:rounded-4xl my-10 md:my-[70px] overflow-hidden">
                <Image
                  src={blog.data.thumbnail}
                  className="w-full h-full object-cover object-center"
                  alt="blog-details-cover"
                  width={1200}
                  height={700}
                />
              </figure>
            </RevealAnimation>
            {/* Blog details-body */}

            <RevealAnimation delay={0.5}>
              <article className="details-body">
                {/* Check if content is HTML (from WordPress) or Markdown */}
                {blog.content.includes('<') ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
                )}
              </article>
            </RevealAnimation>
            {/* details-footer */}
            <ShareLink />
          </div>

          {/* Blog Sidebar */}
          {wpCategories && recentBlogs && (
            <BlogSidebar wpCategories={wpCategories} recentBlogs={recentBlogs} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
