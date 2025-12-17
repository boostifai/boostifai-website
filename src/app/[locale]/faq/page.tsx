import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';
import CTA2 from '@/components/homepage-14/CTA';

export const metadata: Metadata = {
  title: 'FAQ | Boostifai',
};

const FAQ = () => {
  return (
    <Fragment>
                <NavbarOne
             className="border border-white backdrop-blur-[25px]"
             btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
           />
      <main className="bg-background-3 dark:bg-background-7">
        {/* <PageHero title="FAQ" heading="Frequently asked questions" link="/faq" /> */}
        <FaqTab />
        <Contact />
        {/* <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="!badge-cyan"
          badgeText="Get Started"
          ctaHeading="Ready to start earning with NextSaaS?"
          description="If you have any questions, feel free to reach out to our team."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        /> */}
        <CTA2 />
      </main>
           <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default FAQ;
