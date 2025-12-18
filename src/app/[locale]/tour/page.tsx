import TourHero from '@/components/tour/TourHero';
import TourWidget from '@/components/tour/TourWidget';
import TourBenefits from '@/components/tour/TourBenefits';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterThree from '@/components/shared/footer/FooterThree';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard Tour - Boostifai',
  description: 'Explore Boostifai\'s intuitive dashboard with our interactive tour.',
};

const TourPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <TourHero />
        <TourWidget />
        <TourBenefits />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default TourPage;
