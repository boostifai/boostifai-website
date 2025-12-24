import BlogListWrapper from '@/components/blog-03/BlogListWrapper';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { generateAlternates } from '@/utils/generateAlternates';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Blog | Boostifai',
    description: 'Read the latest SEO tips, insights, and industry trends. Learn how to improve your website\'s search rankings and drive organic traffic.',
    alternates: generateAlternates(locale, '/blog'),
  };
}

// Enable dynamic rendering for blog list page
export const dynamic = 'force-dynamic';

interface BlogPageProps {
  params: Promise<{ locale: 'en' | 'nl' }>;
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

const BlogPage03 = async ({ params, searchParams }: BlogPageProps) => {
  const { locale } = await params;
  const searchParamsResolved = await searchParams;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <BlogListWrapper searchParams={searchParamsResolved} locale={locale} />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default BlogPage03;
