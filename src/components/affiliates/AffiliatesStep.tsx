'use client';

import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import commissionIcon from '@public/images/affiliates/commission.webp';
import conversionIcon from '@public/images/affiliates/conversion.webp';
import marketingIcon from '@public/images/affiliates/marketing.webp';
import trackingIcon from '@public/images/affiliates/tracking.webp';

interface AffiliateStep {
  id: string;
  icon: StaticImageData;
  titleKey: string;
  descriptionKey: string;
}

const affiliateStepsData: AffiliateStep[] = [
  {
    id: '1',
    icon: commissionIcon,
    titleKey: 'benefit1Title',
    descriptionKey: 'benefit1Description',
  },
  {
    id: '2',
    icon: conversionIcon,
    titleKey: 'benefit2Title',
    descriptionKey: 'benefit2Description',
  },
  {
    id: '3',
    icon: marketingIcon,
    titleKey: 'benefit3Title',
    descriptionKey: 'benefit3Description',
  },
  {
    id: '4',
    icon: trackingIcon,
    titleKey: 'benefit4Title',
    descriptionKey: 'benefit4Description',
  },
];

const AffiliatesStep = () => {
  const t = useTranslations('AffiliatesPage.benefits');
  return (
    <div className="grid grid-cols-12 gap-8">
      {affiliateStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
          <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-3 bg-white dark:bg-background-6 rounded-[20px]">
            <div className="space-y-11">
              <div>
                <Image 
                  src={step.icon} 
                  alt={t(step.titleKey)}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5">{t(step.titleKey)}</h3>
              <p className="max-w-[345px]">{t(step.descriptionKey)}</p>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

AffiliatesStep.displayName = 'AffiliatesStep';
export default AffiliatesStep;
