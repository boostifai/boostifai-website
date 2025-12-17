'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

interface CommunityFeature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const Community = () => {
  const t = useTranslations('TutorialsPage.features');
  
  const communityFeatures: CommunityFeature[] = [
    {
      icon: 'ns-shape-9',
      titleKey: 'feature1Title',
      descriptionKey: 'feature1Description',
    },
    {
      icon: 'ns-shape-3',
      titleKey: 'feature2Title',
      descriptionKey: 'feature2Description',
    },
    {
      icon: 'ns-shape-12',
      titleKey: 'feature3Title',
      descriptionKey: 'feature3Description',
    },
  ];

  return (
    <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>{t('title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>{t('description')}</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {communityFeatures.map((feature, index) => (
            <RevealAnimation key={feature.titleKey} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                  <div className="mx-auto">
                    <span className={`${feature.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{t(feature.titleKey)}</h3>
                    <p>{t(feature.descriptionKey)}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
