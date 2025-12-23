'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const AiArticlesThankYou = () => {
  const t = useTranslations('AiArticlesPage.thankYou');

  return (
    <section className="pt-32 pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2">{t('title')}</h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-[600px] mx-auto">
              {t('description')}
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12 space-y-6 text-left">
              <h2 className="text-heading-5 md:text-heading-4 text-center">{t('nextStepsTitle')}</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-heading-6 mb-2">{t('step1Title')}</h3>
                    <p className="text-secondary/60 dark:text-accent/60">{t('step1Description')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-heading-6 mb-2">{t('step2Title')}</h3>
                    <p className="text-secondary/60 dark:text-accent/60">{t('step2Description')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-heading-6 mb-2">{t('step3Title')}</h3>
                    <p className="text-secondary/60 dark:text-accent/60">{t('step3Description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/business-pricing"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg">
                {t('ctaButton')}
              </Link>
              <Link
                href="/blog"
                className="btn btn-outline btn-lg">
                {t('blogButton')}
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AiArticlesThankYou;
