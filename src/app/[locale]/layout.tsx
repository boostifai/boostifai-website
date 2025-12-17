import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { interTight } from '@/utils/font';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import { locales } from '@/i18n/request';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
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
