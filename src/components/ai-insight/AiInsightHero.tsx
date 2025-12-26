'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import heroImage from '@public/images/home-page-24/ai-insight-hero.png';
import heroImage2 from '@public/images/home-page-24/ai-insight-hero2.png';

const AiInsightHero = () => {
  const t = useTranslations('AiInsightPage.hero');

  return (
    <section className="pt-[100px] md:pt-[150px] pb-16 md:pb-20">
      <div className="main-container">
        <div className="max-w-[900px] mx-auto text-center space-y-8">
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1">{t('title')}</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-[700px] mx-auto">
              {t('description')}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/business-pricing"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg">
                {t('ctaButton')}
              </Link>
              <Link href="/book-meeting" className="btn btn-outline btn-lg">
                {t('demoButton')}
              </Link>
            </div>
          </RevealAnimation>
          
          {/* Two Images Side by Side */}
          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevealAnimation delay={0.5}>
                <div className="relative">
                  <Image
                    src={heroImage}
                    alt="AI Insight Brand Visibility Dashboard"
                    className="rounded-[20px] shadow-2xl w-full"
                    priority
                  />
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="relative overflow-hidden rounded-[20px] shadow-2xl" style={{ aspectRatio: 'auto' }}>
                  <Image
                    src={heroImage2}
                    alt="AI Insight Brand Sentiment Analysis"
                    className="w-full h-full object-cover object-top"
                    fill
                    priority
                  />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInsightHero;
