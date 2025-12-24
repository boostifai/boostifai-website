import AnalyticsDetails from '@/components/analytics/AnalyticsDetails';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsTestimonial from '@/components/analytics/AnalyticsTestimonial';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';
import FooterThree from '@/components/shared/footer/FooterThree';
import { generateAlternates } from '@/utils/generateAlternates';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'About Us | Boostifai',
    description: 'Learn about Boostifai\'s mission to revolutionize SEO for businesses and agencies through innovative AI technology. Discover our story and team.',
    alternates: generateAlternates(locale, '/about'),
  };
}

const Analytics = () => {
  return (
    <Fragment>
       <NavbarOne className="border border-white backdrop-blur-[25px]"
                   btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
                 />
      <main className="bg-background-3 dark:bg-background-7">
        {/* <PageHero title="About Us" heading="About Us" link="/about" /> */}
        <AnalyticsHero />
        <AnalyticsDetails />
        <AnalyticsTestimonial />
        <CTA2 />
      </main>
       <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

Analytics.displayName = 'Analytics';
export default Analytics;
