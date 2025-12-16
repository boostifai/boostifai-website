'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Service {
  id: number;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const servicesData: Service[] = [
  {
    id: 2,
    icon: '/images/home-page-24/auto-blogging.png',
    titleKey: 'service1Title',
    descriptionKey: 'service1Description',
  },
  {
    id: 3,
    icon: '/images/home-page-24/rank-analyzer.png',
    titleKey: 'service2Title',
    descriptionKey: 'service2Description',
  },
  {
    id: 4,
    icon: '/images/home-page-24/link-building.png',
    titleKey: 'service3Title',
    descriptionKey: 'service3Description',
  },
  {
    id: 5,
    icon: '/images/home-page-24/ai-insight.png',
    titleKey: 'service4Title',
    descriptionKey: 'service4Description',
  },
  {
    id: 8,
    icon: '/images/home-page-24/technical-skill.png',
    titleKey: 'service5Title',
    descriptionKey: 'service5Description',
  },
  {
    id: 9,
    icon: '/images/home-page-24/cost-effective.png',
    titleKey: 'service6Title',
    descriptionKey: 'service6Description',
  },
];

const Services = () => {
  const t = useTranslations('HomePage.services');
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[50px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="md:max-w-[828px] sm:max-w-[600px] max-[375px]:max-w-[270px] mx-auto">
              {t('title')}
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="md:max-w-[606px] sm:max-w-[400px] max-w-[390px] mx-auto">
              {t('description')}
            </p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6 mb-14">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-span-12 md:col-span-6 lg:col-span-4 flex">
              <RevealAnimation delay={0.3 + index * 0.1} className="flex w-full">
                <div className="bg-white dark:bg-background-6 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4 flex flex-col w-full">
                  {/* Service Icon */}
                  <div>
                    <Image
                      src={service.icon}
                      alt={t(service.titleKey)}
                      width={52}
                      height={52}
                      className="sm:w-[52px] sm:h-[52px] w-[40px] h-[40px] object-contain"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="sm:text-heading-5 text-heading-6">{t(service.titleKey)}</h3>
                    <p>{t(service.descriptionKey)}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="#"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>{t('ctaButton')}</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
