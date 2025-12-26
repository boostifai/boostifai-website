'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import heroImage from '@public/images/home-page-24/email-report-hero.png';

const EmailReportsHero = () => {
  const t = useTranslations('EmailReportsPage.hero');

  return (
    <section className="pt-[100px] md:pt-[150px] pb-16 md:pb-20">
      <div className="main-container">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center space-y-8 mb-12 md:mb-16">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1">{t('title')}</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-[700px] mx-auto">
                {t('description')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/business-pricing"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg">
                  {t('ctaButton')}
                </Link>
                <Link href="/book-meeting" className="btn btn-outline btn-lg">
                  {t('demoButton')}
                </Link>
              </div>
            </RevealAnimation>
          </div>

          {/* Email Report Preview with Download Button */}
          <RevealAnimation delay={0.5}>
            <div className="relative bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4">{t('sampleTitle')}</h3>
                    <p className="text-secondary/60 dark:text-accent/60">{t('sampleDescription')}</p>
                  </div>
                  <a
                    href="/sample-report.pdf"
                    download
                    className="btn btn-secondary hover:btn-secondary btn-lg">
                    <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t('downloadButton')}
                  </a>
                </div>
                <div className="rounded-[12px] overflow-hidden border border-stroke-1 dark:border-stroke-2">
                  <Image
                    src={heroImage}
                    alt="Email Report Sample"
                    className="w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default EmailReportsHero;
