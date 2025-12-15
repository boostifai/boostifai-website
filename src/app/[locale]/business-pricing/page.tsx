import Client from '@/components/pricing-02/Client';
import BusinessTab from '@/components/faq/BusinessTab';
import Pricing from '@/components/business-pricing/Pricing';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
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
        <Pricing />
        <Client />
        <section className="py-[100px] bg-white dark:bg-background-5">
          <div className="main-container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="max-w-[650px] mx-auto mb-4">Frequently Asked Questions</h2>
              <p className="text-secondary dark:text-accent max-w-[600px]">
                Find answers to common questions about our business pricing
              </p>
            </div>
            <BusinessTab />
          </div>
        </section>
        <CTA2 />
      </main>
            <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

Pricing03.displayName = 'Pricing03';
export default Pricing03;
