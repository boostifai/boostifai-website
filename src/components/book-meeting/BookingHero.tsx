'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const BookingHero = () => {
  const t = useTranslations('BookMeetingPage.hero');
  
  return (
    <section className="pt-[100px] md:pt-[150px] pb-8 md:pb-12">
      <div className="main-container">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <RevealAnimation delay={0.1}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              {t('title')}
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <p className="text-lg md:text-xl text-secondary/60 dark:text-accent/60">
              {t('description')}
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

BookingHero.displayName = 'BookingHero';
export default BookingHero;
