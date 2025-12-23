'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const AiArticlesHero = () => {
  const t = useTranslations('AiArticlesPage.hero');
  
  return (
    <section className="pt-[100px] md:pt-[150px] pb-16 md:pb-20">
      <div className="main-container">
        <div className="max-w-[900px] mx-auto text-center space-y-6">
          {/* <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation> */}
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              {t('title')}
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60">
              {t('description')}
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AiArticlesHero;
