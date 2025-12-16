'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ContactInfo = () => {
  const t = useTranslations('ContactPage.info');

  return (
    <section className="py-16 md:py-20 lg:py-[50px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="max-w-full mx-auto">
            <div>
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Contact Information Title */}
                <div className="col-span-12 lg:col-span-4">
                  <h2>
                    {t('title')}
                  </h2>
                </div>

                {/* Contact Details */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="space-y-6 flex gap-20">

                    {/* Address */}
                    <div>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mb-1">
                        {t('addressLabel')}
                      </p>
                      <p className="text-secondary dark:text-accent">
                        Dulgaardstraat 26<br />
                        3740 Bilzen<br />
                        Belgium
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mb-1">
                        {t('emailLabel')}
                      </p>
                      <a
                        href="mailto:bert@boostifai.com"
                        className="text-secondary dark:text-accent hover:text-primary dark:hover:text-primary transition-colors">
                        bert@boostifai.com
                      </a>
                    </div>

                    {/* VAT Number */}
                    <div>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mb-1">
                        {t('vatLabel')}
                      </p>
                      <p className="text-secondary dark:text-accent">
                        BE 0761.353.493
                      </p>
                    </div>
                  </div>
                </div>

                <RevealAnimation delay={0.6}>
                  <LinkButton
                    href="/book-meeting"
                    className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md inline-flex w-fit">
                    <span>{t('bookMeetingButton')}</span>
                  </LinkButton>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ContactInfo.displayName = 'ContactInfo';
export default ContactInfo;
