'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import cmsLogos from '@public/images/home-page-24/all-cms.png';
import CTA2 from '@/components/homepage-14/CTA';

const AiArticlesCTA = () => {
  const t = useTranslations('AiArticlesPage.cta');

  return (
    <>
      <section className="pt-16 pb-16 md:pb-20 lg:pb-[100px]">
        <div className="main-container">
          <div className="max-w-[700px] mx-auto text-center space-y-8">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4 md:text-heading-3">{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-lg text-secondary/60 dark:text-accent/60">
                {t('description')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="mb-12">
                <Image
                  src={cmsLogos}
                  alt="Compatible CMS platforms"
                  width={900}
                  height={100}
                  className="mx-auto"
                />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <Link
                href="/business-pricing"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg inline-block">
                {t('button')}
              </Link>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <CTA2 />
    </>
  );
};

export default AiArticlesCTA;
