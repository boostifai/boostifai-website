'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const AiRecommendationCTA = () => {
  const t = useTranslations('AiRecommendationPage.cta');

  return (
    <section className="pb-40">
      <div className="main-container">
        <RevealAnimation delay={0.2}>
          <div className="relative max-w-[900px] mx-auto p-8 md:p-12 rounded-[20px] overflow-hidden" style={{ background: 'linear-gradient(120deg, rgb(31 44 129) 0%, rgb(199 63 67) 100%)' }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-heading-4 md:text-heading-3 text-white">
                {t('title')}
              </h2>
              <p className="text-lg text-white/90 max-w-[600px] mx-auto">
                {t('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  href="/business-pricing" 
                  className="btn btn-white hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all"
                >
                  {t('button')}
                </Link>
                <Link 
                  href="/book-meeting" 
                  className="btn bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-all"
                >
                  {t('demoButton')}
                </Link>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AiRecommendationCTA;
