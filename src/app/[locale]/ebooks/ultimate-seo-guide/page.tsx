import EbookBenefits from '@/components/ebook/EbookBenefits';
import EbookDownload from '@/components/ebook/EbookDownload';
import EbookHero from '@/components/ebook/EbookHero';
import EbookTestimonial from '@/components/ebook/EbookTestimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generateAlternates } from '@/utils/generateAlternates';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Free E-book: Ultimate SEO Guide | Boostifai',
    description: 'Download our free Ultimate SEO Guide e-book. Learn hands-on tips and practices to improve your website visibility in Google and rank higher.',
    alternates: generateAlternates(locale, '/ebooks/ultimate-seo-guide'),
  };
}

const UltimateSeoGuideEbook = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <EbookHero />
        <EbookBenefits />
        <EbookTestimonial />
        <EbookDownload />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

UltimateSeoGuideEbook.displayName = 'UltimateSeoGuideEbook';
export default UltimateSeoGuideEbook;
