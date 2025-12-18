'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import icon1 from '@public/images/home-page-24/ai-insight.png';
import icon2 from '@public/images/home-page-24/auto-blogging.png';
import icon3 from '@public/images/home-page-24/keywords-analytics.png';
import icon4 from '@public/images/home-page-24/easy.png';

const TourBenefits = () => {
  const t = useTranslations('TourPage.benefits');

  const benefits = [
    {
      icon: icon1,
      titleKey: 'benefit1Title',
      descriptionKey: 'benefit1Description',
    },
    {
      icon: icon2,
      titleKey: 'benefit2Title',
      descriptionKey: 'benefit2Description',
    },
    {
      icon: icon3,
      titleKey: 'benefit3Title',
      descriptionKey: 'benefit3Description',
    },
    {
      icon: icon4,
      titleKey: 'benefit4Title',
      descriptionKey: 'benefit4Description',
    },
  ];

  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px] max-w-[800px] mx-auto">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-2">{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-body-1">{t('description')}</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <div className="card-item p-8 space-y-4 text-center hover:shadow-lg transition-shadow">
                <figure className="size-16 mx-auto">
                  <Image src={benefit.icon} alt={t(benefit.titleKey)} className="w-full h-full object-contain" />
                </figure>
                <h3 className="text-heading-6">{t(benefit.titleKey)}</h3>
                <p className="text-body-3">{t(benefit.descriptionKey)}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourBenefits;
