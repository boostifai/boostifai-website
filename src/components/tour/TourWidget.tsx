'use client';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const TourWidget = () => {
  const t = useTranslations('TourPage.widget');

  return (
    <section className="py-[60px]">
      <div className="main-container">
        <RevealAnimation delay={0.4}>
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-background-1 dark:bg-background-6 rounded-[30px] p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-heading-4 mb-3">{t('title')}</h2>
                <p className="text-body-2">{t('subtitle')}</p>
              </div>
              {/* Supademo Widget Embed Area */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-background-3 dark:bg-background-7" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://app.supademo.com/embed/cm8ntulfw01t8yz0i9hc81avn?embed_v=2"
                  loading="lazy"
                  title="Sitebooster Tour"
                  allow="clipboard-write"
                  frameBorder="0"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TourWidget;
