import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import RankAnalyzerHero from '@/components/rank-analyzer/RankAnalyzerHero';
import RankAnalyzerFeatures from '@/components/rank-analyzer/RankAnalyzerFeatures';
import RankAnalyzerBenefits from '@/components/rank-analyzer/RankAnalyzerBenefits';
import RankAnalyzerCTA from '@/components/rank-analyzer/RankAnalyzerCTA';

export const metadata: Metadata = {
  title: 'Rank Analyzer - Track Your SEO Rankings | Boostifai',
  description: 'Monitor your website rankings in real-time. Track keywords, analyze performance, and discover growth opportunities with our powerful rank analyzer.',
};

const RankAnalyzerPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <RankAnalyzerHero />
        <RankAnalyzerFeatures />
        <RankAnalyzerBenefits />
        <RankAnalyzerCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default RankAnalyzerPage;
