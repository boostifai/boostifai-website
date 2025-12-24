'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const NewsletterForm = () => {
  const t = useTranslations('NewsletterPage.form');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          locale,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Non-JSON response received:', await response.text());
        throw new Error('Server returned an invalid response. Please try again.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
      setName('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-stroke-2 bg-white dark:bg-background-7 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-stroke-2 bg-white dark:bg-background-7 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-800 dark:text-green-200 text-sm text-center">
                        {t('successMessage')}
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 text-sm text-center">
                        {t('errorMessage')}: {errorMessage}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || status === 'success'}
                    className="w-full btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? t('submitting') : t('submitButton')}
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
