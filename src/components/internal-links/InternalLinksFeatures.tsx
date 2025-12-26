'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const InternalLinksFeatures = () => {
  const t = useTranslations('InternalLinksPage.features');

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          {/* Feature 1: AI-Powered Suggestions */}
          <RevealAnimation delay={0.2}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-primary">{t('feature1Badge')}</span>
                  </RevealAnimation>
                  <h3 className="text-heading-5 md:text-heading-4">{t('feature1Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">{t('feature1Description')}</p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature1Point1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature1Point2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature1Point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Feature 2: Blocklist Control */}
          <RevealAnimation delay={0.3}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-primary">{t('feature2Badge')}</span>
                  </RevealAnimation>
                  <h3 className="text-heading-5 md:text-heading-4">{t('feature2Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">{t('feature2Description')}</p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature2Point1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature2Point2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature2Point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Feature 3: One-Click Approval */}
          <RevealAnimation delay={0.4}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-primary">{t('feature3Badge')}</span>
                  </RevealAnimation>
                  <h3 className="text-heading-5 md:text-heading-4">{t('feature3Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">{t('feature3Description')}</p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature3Point1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature3Point2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature3Point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksFeatures;
