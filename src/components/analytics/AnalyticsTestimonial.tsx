'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import dirkImage from '@public/images/case-study/dirk.webp';

const AnalyticsTestimonial = () => {
  const t = useTranslations('AboutPage.testimonial');
  
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="max-w-[950px] w-[95%] mx-auto flex flex-col space-y-14">
        <div className="space-y-3">
          <RevealAnimation delay={0.1}>
            <h2>{t('title')}</h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.2}>
          <div className="bg-secondary dark:bg-background-8 rounded-[20px] p-8 flex flex-col space-y-6">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image
                  src={dirkImage}
                  alt="Dirk - Founder of Enjoy Andalusia"
                  className="inline-block size-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
              </figure>
            </RevealAnimation>
            <div>
              <p className="text-white dark:text-accent/60">
                &ldquo;Using Boostifai is like having an extra set of hands on deck, allowing us to scale and meet our targets more effectively than ever before. Beyond the numbers, the real game-changer has been the newfound balance in my life. I now have the time to explore and savor the pleasures of Spain, something that was a distant dream before. Boostifai has been pivotal not just in growing my business but in enhancing my lifestyle as well.&rdquo;
              </p>
            </div>
            <div>
              <p className="text-white text-lg font-medium leading-[150%]">Dirk</p>
              <p className="text-accent/60 text-tagline-2">Founder, Enjoy Andalusia</p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AnalyticsTestimonial;
