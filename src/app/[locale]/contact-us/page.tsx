import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import ContactMap from '@/components/contact-page/ContactMap';
import { Metadata } from 'next';
import { Fragment } from 'react';
import CTA2 from '@/components/homepage-14/CTA';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata({
    locale,
    path: '/contact-us',
    title: 'Contact Us | Boostifai',
    description: 'Get in touch with Boostifai. Contact our SEO experts for questions, support, or to discuss how we can help grow your business.',
  });
}

const Support = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <NeedHelp />
        <Contact />
        <ContactMap />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Support;
