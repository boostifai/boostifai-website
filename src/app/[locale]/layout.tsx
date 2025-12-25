import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { interTight } from '@/utils/font';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import { locales } from '@/i18n/request';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/utils/generateMetadata';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    title: 'Boostifai - AI-Powered SEO Automation',
    description: 'Automate your website growth with AI-powered SEO. Boostifai helps businesses boost rankings, create optimized content, and save time without technical hassle.',
  });
}

export default async function LocaleLayout({ children, params }: Props) {
  // Await params in Next.js 15
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as 'en' | 'nl')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense fallback={<div></div>}>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
