import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownDataByLocale from '@/utils/getMarkDownDataByLocale';
import CTA2 from '@/components/homepage-14/CTA';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateStaticParams() {
  try {
    const enCaseStudies = getMarkDownDataByLocale('src/data/case-study', 'en');
    const nlCaseStudies = getMarkDownDataByLocale('src/data/case-study', 'nl');
    
    return [
      ...enCaseStudies.map((post) => ({ locale: 'en', slug: post.slug })),
      ...nlCaseStudies.map((post) => ({ locale: 'nl', slug: post.slug })),
    ];
  } catch (error) {
    console.error('Error generating static params for case studies:', error);
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Case Study Details - NextSaaS',
  description: 'Case Study Details - NextSaaS',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string; locale: 'en' | 'nl' }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const { slug, locale } = await params;
  const t = await getTranslations('CaseStudyPage');
  
  // Import the utility here since it's a server component
  const getMarkDownContentByLocale = (await import('@/utils/getMarkDownContentByLocale')).default;
  const caseStudyData = getMarkDownContentByLocale('src/data/case-study/', slug, locale);
  
  // Transform the data to match ICaseStudy interface
  const caseStudy = {
    title: caseStudyData.data.title || '',
    description: caseStudyData.data.description || '',
    thumbnail: caseStudyData.data.thumbnail || '',
    Results: caseStudyData.data.Results || '',
    slug,
    content: caseStudyData.content,
    ...caseStudyData.data,
  };

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
        <CaseStudyDetails slug={slug} locale={locale} caseStudy={caseStudy} />
        <CTA2 />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
