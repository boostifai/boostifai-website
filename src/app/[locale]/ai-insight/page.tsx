import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import AiInsightHero from '@/components/ai-insight/AiInsightHero';
import AiInsightFeatures from '@/components/ai-insight/AiInsightFeatures';
import AiInsightBenefits from '@/components/ai-insight/AiInsightBenefits';
import AiInsightCTA from '@/components/ai-insight/AiInsightCTA';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    path: '/ai-insight',
    title: 'AI Insight - Track Your Brand Visibility Across LLMs | Boostifai',
    description:
      'Monitor how AI models like ChatGPT, Gemini, Claude, and DeepSeek perceive your brand. Track visibility scores, sentiment analysis, and credibility across top LLMs.',
  });
}

const AiInsightPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <AiInsightHero />
        <AiInsightFeatures />
        <AiInsightBenefits />
        <AiInsightCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default AiInsightPage;
