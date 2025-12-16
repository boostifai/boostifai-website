'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const NewsletterBenefits = () => {
  const t = useTranslations('NewsletterPage.benefits');

  const benefits = [
    {
      id: 1,
      icon: '/images/newsletter/01.png',
      titleKey: 'benefit1Title',
      descriptionKey: 'benefit1Description',
    },
    {
      id: 2,
      icon: '/images/newsletter/02.png',
      titleKey: 'benefit2Title',
      descriptionKey: 'benefit2Description',
    },
    {
      id: 3,
      icon: '/images/newsletter/03.png',
      titleKey: 'benefit3Title',
      descriptionKey: 'benefit3Description',
    },
    {
      id: 4,
      icon: '/images/newsletter/04.png',
      titleKey: 'benefit4Title',
      descriptionKey: 'benefit4Description',
    },
  ];

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 md:text-heading-3">{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60 dark:text-accent/60 max-w-[600px] mx-auto">
              {t('description')}
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="col-span-12 md:col-span-6 lg:col-span-3">
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] p-6 md:p-8 space-y-4 h-full">
                  <div>
                    <Image
                      src={benefit.icon}
                      alt={t(benefit.titleKey)}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6">{t(benefit.titleKey)}</h3>
                    <p className="text-secondary/60 dark:text-accent/60">
                      {t(benefit.descriptionKey)}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

NewsletterBenefits.displayName = 'NewsletterBenefits';
export default NewsletterBenefits;
