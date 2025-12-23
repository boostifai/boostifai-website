'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const AiRecommendationFeatures = () => {
  const t = useTranslations('AiRecommendationPage.features');

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          {/* Feature 1: Meta Tags */}
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
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <span className="badge badge-primary">{t('feature1Badge')}</span>
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

          {/* Feature 2: Image Optimization */}
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <span className="badge badge-primary">{t('feature2Badge')}</span>
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

          {/* Feature 3: Heading Structure */}
          <RevealAnimation delay={0.5}>
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
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <span className="badge badge-primary">{t('feature3Badge')}</span>
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

          {/* Feature 4: Internal Linking */}
          <RevealAnimation delay={0.6}>
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
                  <span className="badge badge-primary">{t('feature4Badge')}</span>
                  <h3 className="text-heading-5 md:text-heading-4">{t('feature4Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">{t('feature4Description')}</p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature4Point1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature4Point2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60">{t('feature4Point3')}</span>
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

export default AiRecommendationFeatures;
