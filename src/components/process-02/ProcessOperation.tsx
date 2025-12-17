'use client';
import ProcessImage from '@public/images/home-page-24/frame_safari_dark.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

const ProcessOperation = () => {
  const t = useTranslations('ProcessPage.benefits');
  return (
    <section className="py-[100px] bg-background-1 dark:bg-background-6 space-y-[70px]">
      <div className="main-container space-y-[70px]">
        <div className="space-y-5 max-w-[804px] mx-auto text-center">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[624px] mx-auto">{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[802px] mx-auto">{t('description')}</p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-y-20 gap-y-14">
          <div className="col-span-12 xl:col-span-5 lg:col-span-6">
            <RevealAnimation delay={0.4}>
              <div>
                <figure className="max-w-[478px] max-h-[547px] lg:mx-0 mx-auto">
                  <Image src={ProcessImage} alt="process" className="h-full w-full object-cover dark:hidden block" />
                  <Image
                    src={ProcessImage}
                    alt="process"
                    className="h-full w-full object-cover hidden dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 xl:col-span-7 lg:col-span-6">
            <div className="space-y-5">
              <RevealAnimation delay={0.5}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div>
                    <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                      1
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      {t('benefit1Title')}
                    </h3>
                    <p>{t('benefit1Description')}</p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div className="size-10 rounded-full bg-ns-green text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      {t('benefit2Title')}
                    </h3>
                    <p>{t('benefit2Description')}</p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div className="size-10 rounded-full bg-ns-red text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">{t('benefit3Title')}</h3>
                    <p>{t('benefit3Description')}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOperation;
