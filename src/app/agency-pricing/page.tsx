import Client from '@/components/pricing-02/Client';
import Faq from '@/components/pricing-02/Faq';
import Pricing from '@/components/agency-pricing/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Pricing 03 - NextSaaS',
};

const Pricing03 = () => {
  return (
    <Fragment>
                 <NavbarOne
              className="border border-white backdrop-blur-[25px]"
              btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
            />
      <main className="bg-background-1 dark:bg-background-6">
        {/* <PageHero title="Pricing 03" heading="Pricing 03 " link="/pricing-03" /> */}
        <Pricing />
        <Client />
        <Faq />
        <CTA2 />
      </main>
            <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

Pricing03.displayName = 'Pricing03';
export default Pricing03;
