import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boostifai - AI-Powered SEO Automation',
  description: 'Automate your website growth with AI-powered SEO. Boostifai helps businesses boost rankings, create optimized content, and save time without technical hassle.',
};

// Redirect root to default locale
export default function RootPage() {
  redirect('/en');
}
