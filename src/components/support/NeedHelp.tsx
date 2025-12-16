'use client';

import support from '@public/images/support-page/support.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const NeedHelp = () => {
  const t = useTranslations('ContactPage.hero');
  
  return (
    <section className="pb-[40px] lg:pb-[50px] pt-[150px]">
      <div className="main-container">
        <div className="text-center space-y-14 mb-[20px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>{t('description')}</p>
            </RevealAnimation>
          </div>
        </div>
        {/* <RevealAnimation delay={0.6} instant>
          <div className="section-reveal">
            <figure className="rounded-[20px] overflow-hidden">
              <Image src={support} alt="support" />
            </figure>
          </div>
        </RevealAnimation> */}
      </div>
    </section>
  );
};

export default NeedHelp;
