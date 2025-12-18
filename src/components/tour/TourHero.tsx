'use client';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const TourHero = () => {
  const t = useTranslations('TourPage.hero');

  return (
    <section className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px] pb-[60px]">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[900px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-1">{t('title')}</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-body-1 max-w-[700px] mx-auto">{t('description')}</p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHero;
