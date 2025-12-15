import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import CTA2 from '@/components/homepage-14/CTA';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Case Study Details - NextSaaS',
  description: 'Case Study Details - NextSaaS',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <>
                      <NavbarOne
                   className="border border-white backdrop-blur-[25px]"
                   btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
                 />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Case Study Details"
          heading="Case Study Details"
          link="/case-study"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <CaseStudyDetails slug={slug} />

        <CTA2
        />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
