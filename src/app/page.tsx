import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://preview.boostifai.com'}/en`,
  },
};

// Redirect root to default locale
export default function RootPage() {
  redirect('/en');
}
