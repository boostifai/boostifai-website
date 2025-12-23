'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const AiArticlesFeatures = () => {
  const t = useTranslations('AiArticlesPage.features');
  
  return (
    <section className="pt-16 pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[900px] mx-auto text-center space-y-6 mb-14 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-3">
              {t('title')}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60">
              {t('subtitle')}
            </p>
          </RevealAnimation>
        </div>

        <div className="max-w-[800px] mx-auto space-y-10">
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/60 dark:text-accent/60">
              {t('description')}
            </p>
          </RevealAnimation>

          <div className="space-y-6">
            <RevealAnimation delay={0.5}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-6 mb-2">{t('feature1Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">
                    {t('feature1Description')}
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-6 mb-2">{t('feature2Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">
                    {t('feature2Description')}
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.7}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-6 mb-2">{t('feature3Title')}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">
                    {t('feature3Description')}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.8}>
            <div className="relative p-8 md:p-10 rounded-[20px] overflow-hidden" style={{ background: 'linear-gradient(120deg, rgb(31 44 129) 0%, rgb(199 63 67) 100%)' }}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <h3 className="text-heading-6 md:text-heading-5 text-white font-semibold">
                    {t('unlimitedTitle')}
                  </h3>
                </div>
                
                <p className="text-white/90 mb-6">
                  {t('unlimitedDescription')}
                </p>
                
                <ol className="space-y-3 text-white/90">
                  <li className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('step1')}</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('step2')}</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('step3')}</span>
                  </li>
                </ol>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AiArticlesFeatures;
