import { Metadata } from 'next';
import Homepage24 from './homepage-24/page';

export const metadata: Metadata = {
  title: 'Boostifai - AI Powered SEO Automation',
};

export default function HomePage({ params }: { params: Promise<{ locale: 'en' | 'nl' }> }) {
  return <Homepage24 params={params} />;
}
