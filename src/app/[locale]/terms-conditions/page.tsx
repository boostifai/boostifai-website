import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TermsConditionContentEN from '@/components/terms-conditions/TermsConditionContentEN';
import TermsConditionContentNL from '@/components/terms-conditions/TermsConditionContentNL';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generateAlternates } from '@/utils/generateAlternates';

interface TermsConditionsProps {
  params: Promise<{
    locale: 'en' | 'nl';
  }>;
}

export async function generateMetadata({ params }: TermsConditionsProps): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Terms & Conditions | Boostifai',
    description: 'Read Boostifai\'s terms and conditions. Understand the rules and guidelines for using our AI-powered SEO automation platform.',
    alternates: generateAlternates(locale, '/terms-conditions'),
  };
}

const TermsConditions = async ({ params }: TermsConditionsProps) => {
  const { locale } = await params;
  const TermsContent = locale === 'nl' ? TermsConditionContentNL : TermsConditionContentEN;
  const pageTitle = locale === 'nl' ? 'Algemene Voorwaarden' : 'Terms & Conditions';

  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title={pageTitle} heading={pageTitle} link="/terms-conditions" />
        <TermsContent />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default TermsConditions;
