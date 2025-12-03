import BlogListWrapper from '@/components/blog-03/BlogListWrapper';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog page 03 - NextSaaS',
};

const BlogPage03 = () => {
  return (
    <>
   <NavbarOne
             className="border border-white backdrop-blur-[25px]"
             btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
           />
      <main className="bg-background-3 dark:bg-background-5">
        {/* <PageHero title="Our Blog" heading="Blog-03" link="#" /> */}
        <BlogListWrapper />
               <CTA2 />
      </main>
        <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default BlogPage03;
