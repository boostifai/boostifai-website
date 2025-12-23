'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import cmsIcon from '@public/images/home-page-24/technical-skill.png';
import timeIcon from '@public/images/home-page-24/uss.png';
import easyIcon from '@public/images/home-page-24/easy.png';
import costIcon from '@public/images/home-page-24/cost-effective.png';

const AiArticlesBenefits = () => {
  const t = useTranslations('AiArticlesPage.benefits');

  const benefits = [
    {
      icon: cmsIcon,
      title: t('benefit1Title'),
      description: t('benefit1Description'),
    },
    {
      icon: timeIcon,
      title: t('benefit2Title'),
      description: t('benefit2Description'),
    },
    {
      icon: easyIcon,
      title: t('benefit3Title'),
      description: t('benefit3Description'),
    },
    {
      icon: costIcon,
      title: t('benefit4Title'),
      description: t('benefit4Description'),
    },
  ];

  return (
    <section className="pt-16 pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[900px] mx-auto text-center space-y-6 mb-14 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-3">{t('title')}</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {benefits.map((benefit, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <article className="col-span-12 md:col-span-6 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-3.5">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center">
                  <Image src={benefit.icon} alt={benefit.title} width={48} height={48} />
                </div>
                <h3 className="text-heading-6 md:text-heading-5">
                  {benefit.title}
                </h3>
                <p className="text-secondary/60 dark:text-accent/60">
                  {benefit.description}
                </p>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiArticlesBenefits;
