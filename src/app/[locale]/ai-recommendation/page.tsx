import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import AiRecommendationHero from '@/components/ai-recommendation/AiRecommendationHero';
import AiRecommendationFeatures from '@/components/ai-recommendation/AiRecommendationFeatures';
import AiRecommendationBenefits from '@/components/ai-recommendation/AiRecommendationBenefits';
import AiRecommendationCTA from '@/components/ai-recommendation/AiRecommendationCTA';

export const metadata: Metadata = {
  title: 'AI Recommendations - Automated On-Page SEO Optimization | Boostifai',
  description: 'Get AI-powered SEO recommendations for your website. Automatically fix meta descriptions, alt tags, headings, and more to improve your search rankings.',
};

const AiRecommendationPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <AiRecommendationHero />
        <AiRecommendationFeatures />
        <AiRecommendationBenefits />
        <AiRecommendationCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default AiRecommendationPage;
