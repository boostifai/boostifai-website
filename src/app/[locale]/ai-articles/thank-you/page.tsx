import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import AiArticlesThankYou from '@/components/ai-articles/AiArticlesThankYou';

export const metadata: Metadata = {
  title: 'Thank You - AI Articles | Boostifai',
  description: 'Thank you for requesting your free AI-powered blog post. Check your email for next steps.',
};

const AiArticlesThankYouPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <AiArticlesThankYou />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default AiArticlesThankYouPage;
