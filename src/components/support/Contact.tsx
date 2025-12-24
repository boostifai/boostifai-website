'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Contact = () => {
  const t = useTranslations('ContactPage.form');
  const tt = useTranslations('ContactPage.info');
  const locale = useLocale();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
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
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        agreeTerms: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
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
    <section className="pt-[50px] pb-[50px] md:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[100px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-left space-y-5 mb-[70px]">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>{t('title')}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[550px]">{t('description')}</p>
                </RevealAnimation>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Contact Details */}
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-6 flex gap-20">
                  {/* Address */}
                  <div>
                    <p className="text-sm text-secondary/60 dark:text-accent/60 mb-1">
                      {tt('addressLabel')}
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
                      {tt('emailLabel')}
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
                      {tt('vatLabel')}
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
                  <span>Book a meeting</span>
                </LinkButton>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.5}>
              <form onSubmit={handleSubmit} className="p-6 lg:p-[42px] rounded-[20px] bg-white dark:bg-background-8">
                <fieldset className="space-y-2 mb-8">
                  <label htmlFor="name" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    required
                    disabled={isSubmitting}
                    className="w-full block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-full h-12 focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </fieldset>
                <fieldset className="space-y-2 mb-8">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('emailPlaceholder')}
                    required
                    disabled={isSubmitting}
                    className="w-full block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-full h-12 focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </fieldset>
                <fieldset className="space-y-2">
                  <label htmlFor="comment" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    {t('commentLabel')}
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('commentPlaceholder')}
                    required
                    disabled={isSubmitting}
                    className="w-full min-h-[115px] block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-xl focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </fieldset>
                <fieldset className="flex mt-4 items-center gap-2 mb-4">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                    <input
                      id="agree-terms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="sr-only peer"
                      required
                      disabled={isSubmitting}
                    />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    {t('termsText')}{' '}
                    <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                      {t('termsLink')}
                    </Link>
                  </label>
                </fieldset>

                {status === 'success' && (
                  <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm text-center">
                      {t('successMessage')}
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm text-center">
                      {t('errorMessage')}: {errorMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || status === 'success'}
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full before:content-none first-letter:uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? t('submitting') : t('submitButton')}
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
