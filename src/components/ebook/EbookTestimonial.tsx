'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const EbookTestimonial = () => {
  const t = useTranslations('EbookPage.testimonial');

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="max-w-[900px] mx-auto">
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-heading-5 md:text-heading-4 mb-6">{t('title')}</h2>
                </div>
                
                <div className="bg-white rounded-[20px] p-8 flex flex-col space-y-6">
                  <div>
                    <p className="text-lg">
                      &ldquo;{t('quote')}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium leading-[150%]">{t('author')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

EbookTestimonial.displayName = 'EbookTestimonial';
export default EbookTestimonial;
