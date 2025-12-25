import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import AiArticlesHero from '@/components/ai-articles/AiArticlesHero';
import AiArticlesForm from '@/components/ai-articles/AiArticlesForm';
import AiArticlesFeatures from '@/components/ai-articles/AiArticlesFeatures';
import AiArticlesBenefits from '@/components/ai-articles/AiArticlesBenefits';
import AiArticlesCTA from '@/components/ai-articles/AiArticlesCTA';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata({
    locale,
    path: '/ai-articles',
    title: 'AI Articles - Automated Blog Post Generator | Boostifai',
    description: 'Generate SEO-optimized blog posts automatically with AI. Create high-quality content that ranks, saves time, and drives organic traffic to your website.',
  });
}

const AiArticlesPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <AiArticlesHero />
        <AiArticlesForm />
        <AiArticlesFeatures />
        <AiArticlesBenefits />
        <AiArticlesCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default AiArticlesPage;
