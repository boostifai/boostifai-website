'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  const t = useTranslations('CaseStudyPage.featured');
  
  return (
    <section className="pt-7 pb-[20px] lg:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">{t('title')}</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                {t('description')}
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">{t('sectionTitle')}</h2>
            </RevealAnimation>
            <ul className="max-w-[435px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  {t('client')}:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Enjoy Andalusia
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  {t('industry')}:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Tourism & Hospitality
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  {t('founder')}:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">Dirk</span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] rounded-4xl overflow-hidden">
              <Image
                src="/images/case-study/spaanse-gerechten.webp"
                alt="Enjoy Andalusia - Spanish cuisine and tourism"
                width={1290}
                height={800}
                className="w-full h-full object-cover"
              />
            </figure>
          </RevealAnimation>

          <div className="space-y-6">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">{t('subtitle')}</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <blockquote className="max-w-[900px] border-l-4 border-primary pl-6 italic text-lg text-secondary/80 dark:text-accent/80">
                &ldquo;Using Boostifai is like having an extra set of hands on deck, allowing us to scale and meet our
                targets more effectively than ever before. Beyond the numbers, the real game-changer has been the
                newfound balance in my life. I now have the time to explore and savor the pleasures of Spain, something
                that was a distant dream before. Boostifai has been pivotal not just in growing my business but in
                enhancing my lifestyle as well.&rdquo;
              </blockquote>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-right font-medium">— Dirk, Founder of Enjoy Andalusia</p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <RevealAnimation delay={0.4}>
              <div className="rounded-2xl bg-white p-8 text-center dark:bg-background-6">
                <h4 className="mb-2 text-4xl font-bold text-primary">+178%</h4>
                <p className="text-secondary/60 dark:text-accent/60">{t('stats.organicSearch', { ns: 'CaseStudyPage' })}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="rounded-2xl bg-white p-8 text-center dark:bg-background-6">
                <h4 className="mb-2 text-4xl font-bold text-primary">+10K</h4>
                <p className="text-secondary/60 dark:text-accent/60">{t('stats.aiSuggestions', { ns: 'CaseStudyPage' })}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="rounded-2xl bg-white p-8 text-center dark:bg-background-6">
                <h4 className="mb-2 text-4xl font-bold text-primary">500+</h4>
                <p className="text-secondary/60 dark:text-accent/60">{t('stats.rankingKeywords', { ns: 'CaseStudyPage' })}</p>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.7}>
            <div className="flex justify-center">
              <Link
                href="/case-study/enjoy-andalusia-seo-growth-spain"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md">
                {t('ctaButton')}
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
