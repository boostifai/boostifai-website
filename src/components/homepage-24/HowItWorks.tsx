'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const HowItWork = () => {
  const t = useTranslations('HomePage.howItWorks');
  return (
    <section className="py-20 md:py-28 lg:py-30 xl:pt-39 xl:pb-30">
      <div className="main-container">
        <div className="mb-7 md:mb-19 text-center lg:max-w-[630px] lg:mx-auto">
          {/* <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">How It Works</span>
          </RevealAnimation> */}
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">{t('title')}</h2>
          </RevealAnimation>
          {/* <RevealAnimation delay={0.3}>
            <p className="max-w-[350px] mx-auto">
              From setup to automation, getting started with your AI gadget is effortless.
            </p>
          </RevealAnimation> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start xl:items-center gap-y-6 sm:gap-x-5 md:gap-x-8 relative">
          <RevealAnimation delay={0.6} direction="left">
            <div className="w-[calc(100%-35%)] hidden sm:block absolute top-[22%] min-[860px]:top-[27.5%] left-[17%] z-0 h-[1px] bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.2)_0_4px,_transparent_4px_8px)]" />
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-[#c9cad5] rounded-[60px] text-secondary">1</div>
              <div className="space-y-1">
                <h5>{t('step1Title')}</h5>
                <p className="text-tagline-1">{t('step1Description')}</p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-[#c9cad5] rounded-[60px] text-secondary">2</div>
              <div className="space-y-1">
                <h5>{t('step2Title')}</h5>
                <p className="text-tagline-1">
                  {t('step2Description')}
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="left">
            <div className="text-center flex flex-col items-center justify-center space-y-6 py-10 px-5">
              <div className="px-9 py-2.5 bg-white border-8 border-[#c9cad5] rounded-[60px] text-secondary">3</div>
              <div className="space-y-1">
                <h5>{t('step3Title')}</h5>
                <p className="text-tagline-1">{t('step3Description')}</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
        {/* btn  */}
      <div className="flex items-center justify-center mt-10">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/our-process"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>{t('ctaButton')}</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
