'use client';

// affiliate-program section
import affiliatesCover from '@public/images/home-page-24/frame_safari_dark.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AffiliateProgram = () => {
  const t = useTranslations('AffiliatesPage');
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[44px] xl:pb-[50px]">
      <div className="main-container">
                <div className="flex flex-col lg:flex-row items-center lg:gap-[100px] gap-y-14">
          <div className="flex-1 space-y-14 max-w-[540px] mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2>{t('hero.title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                 {t('hero.description')}
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div>
                <LinkButton
                  href="https://marketplace.plugandpay.nl/boostifai"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  {t('hero.ctaButton')}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3} instant>
              <figure className="opacity-0 max-w-[596px] w-full rounded-[20px] overflow-hidden">
                <Image src={affiliatesCover} className="w-full h-full object-cover" alt="learn banner" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-14 md:space-y-[70px]">

          {/* <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full rounded-[20px] overflow-hidden">
              <Image
                src={affiliatesCover}
                className="w-full h-full object-cover object-center"
                alt="Boostifai screenshot"
              />
            </figure>
          </RevealAnimation> */}
          <div className="space-y-10 mt-40">
            <RevealAnimation delay={0.3}>
              <div className="text-center">
                <h4>{t('whatIsBoostifai.title')}</h4>
                <p className="mt-3 max-w-[800px] mx-auto">
                  {t('whatIsBoostifai.description')}
                </p>
              </div>
            </RevealAnimation>
            <div className="grid grid-cols-12 gap-8">
              <RevealAnimation delay={0.4}>
                <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
                  <div className="space-y-3">
                    <h3 className="text-heading-6 md:text-heading-5">{t('whatIsBoostifai.card1Title')}</h3>
                    <p>
                      {t('whatIsBoostifai.card1Description')}
                    </p>
                  </div>
                </article>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
                  <div className="space-y-3">
                    <h3 className="text-heading-6 md:text-heading-5">{t('whatIsBoostifai.card2Title')}</h3>
                    <p>
                      {t('whatIsBoostifai.card2Description')}
                    </p>
                  </div>
                </article>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
                  <div className="space-y-3">
                    <h3 className="text-heading-6 md:text-heading-5">{t('whatIsBoostifai.card3Title')}</h3>
                    <p>
                      {t('whatIsBoostifai.card3Description')}
                    </p>
                  </div>
                </article>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;
