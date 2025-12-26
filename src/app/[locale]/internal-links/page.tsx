import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import InternalLinksHero from '@/components/internal-links/InternalLinksHero';
import InternalLinksFeatures from '@/components/internal-links/InternalLinksFeatures';
import InternalLinksBenefits from '@/components/internal-links/InternalLinksBenefits';
import InternalLinksCTA from '@/components/internal-links/InternalLinksCTA';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    path: '/internal-links',
    title: 'AI-Powered Internal Linking - Automate Your Site Structure | Boostifai',
    description:
      'Boost your SEO with AI-powered internal linking. Get smart link suggestions, manage blocklists, and approve links with one click. Strengthen your site structure automatically.',
  });
}

const InternalLinksPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <InternalLinksHero />
        <InternalLinksFeatures />
        <InternalLinksBenefits />
        <InternalLinksCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default InternalLinksPage;
