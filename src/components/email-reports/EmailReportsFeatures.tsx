'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const EmailReportsFeatures = () => {
  const t = useTranslations('EmailReportsPage.features');

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[900px] mx-auto text-center space-y-6 mb-14 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-3">{t('title')}</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Feature 1 */}
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature1Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature1Description')}</p>
            </div>
          </RevealAnimation>

          {/* Feature 2 */}
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature2Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature2Description')}</p>
            </div>
          </RevealAnimation>

          {/* Feature 3 */}
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature3Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature3Description')}</p>
            </div>
          </RevealAnimation>

          {/* Feature 4 */}
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature4Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature4Description')}</p>
            </div>
          </RevealAnimation>

          {/* Feature 5 */}
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature5Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature5Description')}</p>
            </div>
          </RevealAnimation>

          {/* Feature 6 */}
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 pt-6 rounded-[20px] bg-white dark:bg-background-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-start">
                <svg
                  className="w-8 h-8 text-primary dark:text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-6 md:text-heading-5">{t('feature6Title')}</h3>
              <p className="text-secondary/60 dark:text-accent/60">{t('feature6Description')}</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default EmailReportsFeatures;
