import EbookBenefits from '@/components/ebook/EbookBenefits';
import EbookDownload from '@/components/ebook/EbookDownload';
import EbookHero from '@/components/ebook/EbookHero';
import EbookTestimonial from '@/components/ebook/EbookTestimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Free E-book: Ultimate SEO Guide | Boostifai',
  description: 'Download our free Ultimate SEO Guide e-book. Learn hands-on tips and practices to improve your website visibility in Google and rank higher.',
};

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
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

UltimateSeoGuideEbook.displayName = 'UltimateSeoGuideEbook';
export default UltimateSeoGuideEbook;
