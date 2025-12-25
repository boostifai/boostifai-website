import CaseStudy from '@/components/case-study/CaseStudy';
import Success from '@/components/case-study/Success';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import CTA2 from '@/components/homepage-14/CTA';
import { ICaseStudy } from '@/interface';
import getMarkDownDataByLocale from '@/utils/getMarkDownDataByLocale';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/generateMetadata';

interface CaseStudyPageProps {
  params: Promise<{
    locale: 'en' | 'nl';
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata({
    locale,
    path: '/case-study',
    title: 'Case Studies | Boostifai',
    description: 'Read real success stories from businesses using Boostifai. See how our AI-powered SEO automation drives measurable results and growth.',
  });
}

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { locale } = await params;
  const t = await getTranslations('CaseStudyPage');
  const caseStudies: ICaseStudy[] = getMarkDownDataByLocale('src/data/case-study', locale);

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title={t('pageTitle')}
          heading={t('pageTitle')}
          link="/case-study"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <CaseStudy />
        <Success caseStudies={caseStudies} />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
