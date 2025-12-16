'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const NewsletterForm = () => {
  const t = useTranslations('NewsletterPage.form');
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
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 md:p-12">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="text-heading-5 md:text-heading-4">{t('title')}</h2>
                  <p className="text-secondary/60 dark:text-accent/60">{t('subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('namePlaceholder')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-stroke-2 bg-white dark:bg-background-7 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('emailPlaceholder')}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-stroke-2 bg-white dark:bg-background-7 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md">
                    {submitted ? t('successMessage') : t('submitButton')}
                  </button>
                </form>

                <div className="text-center text-sm text-secondary/60 dark:text-accent/60">
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

NewsletterForm.displayName = 'NewsletterForm';
export default NewsletterForm;
