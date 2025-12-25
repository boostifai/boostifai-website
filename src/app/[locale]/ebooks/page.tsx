import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';
import CTA2 from '@/components/homepage-14/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata({
    locale,
    path: '/ebooks',
    title: 'Free SEO Ebooks & Guides | Boostifai',
    description: 'Download free SEO ebooks and guides. Learn proven strategies to improve your website\'s search rankings and drive organic traffic.',
  });
}

const Tutorial = () => {
  return (
    <Fragment>
            <NavbarOne
              className="border border-white backdrop-blur-[25px]"
              btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
            />
       <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Tutorial" heading="Tutorial" link="/tutorial" />
        <Banner />
        <Blog />
        <Community />
         <CTA2 />
      </main>
       <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Tutorial;
