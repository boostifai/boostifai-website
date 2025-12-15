import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import ContactMap from '@/components/contact-page/ContactMap';
import { Metadata } from 'next';
import { Fragment } from 'react';
import CTA2 from '@/components/homepage-14/CTA';

export const metadata: Metadata = {
  title: 'Support - NextSaaS',
};

const Support = () => {
  return (
    <Fragment>
     <NavbarOne className="border border-white backdrop-blur-[25px]"
                  btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
                />
      <main className="bg-background-3 dark:bg-background-7">
        {/* <PageHero title="Support" heading="Support" link="/support" /> */}
        <NeedHelp />
        <Services />
        <Contact />
        <ContactMap />
        <CTA2 />
      </main>
       <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Support;
