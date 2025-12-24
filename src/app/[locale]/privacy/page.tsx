import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import PrivacyContentEN from '@/components/privacy/PrivacyContentEN';
import PrivacyContentNL from '@/components/privacy/PrivacyContentNL';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generateAlternates } from '@/utils/generateAlternates';

interface PrivacyProps {
  params: Promise<{
    locale: 'en' | 'nl';
  }>;
}

export async function generateMetadata({ params }: PrivacyProps): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Privacy Policy | Boostifai',
    description: 'Read Boostifai\'s privacy policy. Learn how we collect, use, and protect your personal information and data.',
    alternates: generateAlternates(locale, '/privacy'),
  };
}

const Privacy = async ({ params }: PrivacyProps) => {
  const { locale } = await params;
  const PrivacyContent = locale === 'nl' ? PrivacyContentNL : PrivacyContentEN;
  const pageTitle = locale === 'nl' ? 'Privacybeleid' : 'Privacy Policy';

  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title={pageTitle} heading={pageTitle} link="/privacy" />
        <PrivacyContent />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Privacy;
