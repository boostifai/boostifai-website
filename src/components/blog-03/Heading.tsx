'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const Heading = () => {
  const t = useTranslations('BlogPage.heading');
  
  return (
    <div className="text-center space-y-3 mb-14 md:mb-[70px]">
      <RevealAnimation delay={0.2}>
        <h2>
          {t('title').split(t('titleHighlight'))[0]}
          <span className="text-primary-500 inline-block">{t('titleHighlight')}</span>
        </h2>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="max-w-[738px] mx-auto">
          {t('description')}
        </p>
      </RevealAnimation>
    </div>
  );
};

export default Heading;
