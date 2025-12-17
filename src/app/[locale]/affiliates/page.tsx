import AffiliateProcess from '@/components/affiliates/AffiliateProcess';
import AffiliateProgram from '@/components/affiliates/AffiliateProgram';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Affiliates | Boostifai',
};

const AffiliatePolicy = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Affiliates" heading="Affiliates" link="/affiliates" />
        <AffiliateProgram />
        <AffiliateProcess />
        <CTA2 />
      </main>
            <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default AffiliatePolicy;
