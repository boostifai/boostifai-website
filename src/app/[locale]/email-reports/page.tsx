import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import EmailReportsHero from '@/components/email-reports/EmailReportsHero';
import EmailReportsFeatures from '@/components/email-reports/EmailReportsFeatures';
import EmailReportsCTA from '@/components/email-reports/EmailReportsCTA';
import { generatePageMetadata } from '@/utils/generateMetadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    path: '/email-reports',
    title: 'Automated Email Reports - Monthly SEO Progress Updates | Boostifai',
    description:
      'Stay informed with automated monthly email reports. Track your SEO progress, keyword rankings, traffic growth, and performance metrics delivered straight to your inbox.',
  });
}

const EmailReportsPage = async ({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) => {
  await params;

  return (
    <>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <EmailReportsHero />
        <EmailReportsFeatures />
        <EmailReportsCTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </>
  );
};

export default EmailReportsPage;
