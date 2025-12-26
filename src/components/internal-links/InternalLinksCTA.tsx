'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import CTA2 from '@/components/homepage-14/CTA';

const InternalLinksCTA = () => {
  const t = useTranslations('InternalLinksPage.cta');

  return (
    <>
      <section className="pt-16 pb-16 md:pb-20 lg:pb-[100px]">
        <div className="main-container">
          <div className="max-w-[800px] mx-auto">
            <div
              className="relative overflow-hidden rounded-[20px] p-8 md:p-12 text-center space-y-6"
              style={{
                background: 'linear-gradient(120deg, rgb(31 44 129) 0%, rgb(199 63 67) 100%)',
              }}>
              <RevealAnimation delay={0.1}>
                <h2 className="text-heading-4 md:text-heading-3 text-white">{t('title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-lg text-white/90 max-w-[600px] mx-auto">{t('description')}</p>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/business-pricing" className="btn bg-white text-primary hover:bg-white/90 btn-lg">
                    {t('ctaButton')}
                  </Link>
                  <Link
                    href="/book-meeting"
                    className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg">
                    {t('demoButton')}
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      <CTA2 />
    </>
  );
};

export default InternalLinksCTA;
