import ProcessStep from '@/components/process-02/ProcessStep';
import ProcessOperation from '@/components/process-02/ProcessOperation';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import FooterThree from '@/components/shared/footer/FooterThree';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/utils/generateAlternates';

type ProcessPageProps = {
  params: Promise<{ locale: 'en' | 'nl' }>;
};

export async function generateMetadata({ params }: ProcessPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Our Process | Boostifai',
    alternates: generateAlternates(locale, '/our-process'),
  };
}

const Process02 = async ({ params }: ProcessPageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ProcessPage.hero' });

  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title={t('title')}
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
          heading={t('heading')}
          link="/our-process"
        />
        <ProcessStep />
        <ProcessOperation />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

Process02.displayName = 'Process02';
export default Process02;
