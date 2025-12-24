import NewsletterBenefits from '@/components/newsletter/NewsletterBenefits';
import NewsletterForm from '@/components/newsletter/NewsletterForm';
import NewsletterHero from '@/components/newsletter/NewsletterHero';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generateAlternates } from '@/utils/generateAlternates';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Newsletter | Boostifai',
    description: 'Subscribe to our newsletter for the latest SEO tips, insights, and updates.',
    alternates: generateAlternates(locale, '/newsletter'),
  };
}

const Newsletter = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <NewsletterHero />
        <NewsletterBenefits />
        <NewsletterForm />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

Newsletter.displayName = 'Newsletter';
export default Newsletter;
