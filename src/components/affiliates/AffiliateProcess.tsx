'use client';

//   Affiliate Process section
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AffiliatesList from './AffiliatesList';
import AffiliatesStep from './AffiliatesStep';

const AffiliateProcess = () => {
  const t = useTranslations('AffiliatesPage');
  
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="text-center max-w-[602px] space-y-3 mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-5">{t('benefits.badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>{t('benefits.title')}</h2>
            </RevealAnimation>
          </div>
          <AffiliatesStep />
        </div>
        <AffiliatesList />
        <RevealAnimation delay={0.3} instant>
              <div className='mt-15'>
                <LinkButton
                  href="https://marketplace.plugandpay.nl/boostifai"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  {t('hero.ctaButton')}
                </LinkButton>
              </div>
            </RevealAnimation>
      </div>
    </section>
  );
};

AffiliateProcess.displayName = 'AffiliateProcess';
export default AffiliateProcess;
