'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import ebookCover from '@public/images/ebook/ultimate-seo-guide-ebook-cover.png';

const EbookHero = () => {
  const t = useTranslations('EbookPage.hero');
  
  return (
    <section className="pt-[100px] md:pt-[150px] pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{t('badge')}</span>
            </RevealAnimation>
            
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
                {t('title')}
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/60 dark:text-accent/60">
                {t('description')}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60">
                {t('subtitle')}
              </p>
            </RevealAnimation>
          </div>

          {/* Right side - Ebook cover */}
          <div className="col-span-12 lg:col-span-5">
            <RevealAnimation delay={0.5}>
              <div className="relative">
                <Image
                  src={ebookCover}
                  alt={t('title')}
                  className="w-full max-w-[400px] mx-auto"
                  priority
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

EbookHero.displayName = 'EbookHero';
export default EbookHero;
