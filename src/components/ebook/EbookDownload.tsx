'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const EbookDownload = () => {
  const t = useTranslations('EbookPage.download');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setName('');
    }, 3000);
  };

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[700px] mx-auto">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-8 md:p-12">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="text-heading-5 md:text-heading-4 text-white dark:text-accent">
                    {t('title')}
                  </h2>
                  <p className="text-white/80 dark:text-accent/60">{t('subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white dark:text-accent">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('namePlaceholder')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white dark:text-accent">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('emailPlaceholder')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full btn btn-primary hover:btn-accent btn-md">
                    {submitted ? t('successMessage') : t('submitButton')}
                  </button>
                </form>

                <div className="text-center text-sm text-white/60 dark:text-accent/60">
                  {t('privacyNote')}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

EbookDownload.displayName = 'EbookDownload';
export default EbookDownload;
