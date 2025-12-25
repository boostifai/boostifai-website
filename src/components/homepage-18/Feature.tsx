'use client';

import feature1Dark from '@public/images/home-page-18/feature-1-dark.png';
import feature1 from '@public/images/home-page-18/feature-1.png';
import feature2Dark from '@public/images/home-page-18/feature-2-dark.png';
import feature2 from '@public/images/home-page-18/feature-2.png';
import feature3Dark from '@public/images/home-page-18/feature-3-dark.png';
import feature3 from '@public/images/home-page-18/feature-3.png';
import feature4Dark from '@public/images/home-page-18/feature-4-dark.png';
import feature4 from '@public/images/home-page-18/feature-4.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import blog from '@public/images/home-page-24/blog.png';
import internallinks from '@public/images/home-page-24/internal-links.png';
import seotools from '@public/images/home-page-24/seo-tools.png';
import recommendations from '@public/images/home-page-24/recommendations2.png';

const Feature = () => {
  const t = useTranslations('HomePage.features');
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white dark:bg-black">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[750px] mx-auto mb-10 md:mb-[70px]">
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 font-medium">{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60 max-w-[600px] mx-auto">
                {t('description')}
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 xl:mb-18">
          <RevealAnimation delay={0.5}>
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[10px] space-y-6"
              style={{ background: 'linear-gradient(135deg, rgb(163, 175, 242) 0%, #D4D9FA 100%)' }}
            >
              <div className="space-y-2">
                <h3 className="text-[26px] font-medium">{t('feature1Title')}</h3>
                <p className="max-w-[450px]">
                  {t('feature1Description')}
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={recommendations}
                  alt="feature image"
                  width={785}
                  height={221}
                  className="w-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[10px] space-y-6"
              style={{ background: 'linear-gradient(45deg, rgb(255, 141, 107) 0%, rgb(255, 198, 183) 100%)' }}
            >
              <div className="space-y-2">
                <h3 className="text-[26px] font-medium">{t('feature2Title')}</h3>
                <p className="max-w-[300px]">{t('feature2Description')}</p>
              </div>
              <figure className="w-full">
                <Image
                  src={internallinks}
                  alt="feature image"
                  width={345}
                  height={226}
                  className="w-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[10px] space-y-6"
              style={{ background: 'linear-gradient(45deg, rgb(212, 145, 242) 0%, rgb(227, 198, 240) 100%)' }}
            >
              <div className="space-y-2">
                <h3 className="text-[26px] font-medium">{t('feature3Title')}</h3>
                <p>{t('feature3Description')}</p>
              </div>
              <figure className="w-full">
                <Image
                  src={seotools}
                  alt="feature image"
                  width={345}
                  height={230}
                  className="w-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[10px] space-y-6"
              style={{ background: 'linear-gradient(45deg, rgb(238, 238, 238) 0%, rgb(242, 242, 242) 100%)' }}
            >
              <div className="space-y-2 max-w-[485px]">
                <h3 className="text-[26px] font-medium">{t('feature4Title')}</h3>
                <p className="max-w-[485px]">
                  {t('feature4Description')}
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={blog}
                  alt="feature image"
                  width={785}
                  height={238}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
