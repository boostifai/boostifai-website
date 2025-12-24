'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  const t = useTranslations('FAQPage.contact');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('fullname') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      locale: locale,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="main-w-[850px] md:w-full mx-auto text-center space-y-5">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-primary">{t('badge')}</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">{t('title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[442px] sm:w-full mx-auto">
                  {t('description')}
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* form */}
          <RevealAnimation delay={0.5}>
            <div className="contact-form max-w-[850px] md:w-full mx-auto bg-white dark:bg-background-6 rounded-[20px] p-5 sm:p-[42px]">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-center">
                    {locale === 'nl'
                      ? 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.'
                      : 'Thank you for your message! We will get back to you as soon as possible.'}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-center">
                    {errorMessage ||
                      (locale === 'nl'
                        ? 'Er is iets misgegaan. Probeer het opnieuw.'
                        : 'Something went wrong. Please try again.')}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* full name */}
                <div className="space-y-2 mb-8">
                  <label
                    htmlFor="fullname"
                    className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    {t('form.fullName')}
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder={t('form.fullNamePlaceholder')}
                    required
                    autoComplete="name"
                    className="w-full px-[18px] shadow-1 dark:text-accent dark:bg-background-6 py-2 rounded-full border border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                {/* email */}
                <div className="space-y-2 mb-8">
                  <label htmlFor="email" className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('form.emailPlaceholder')}
                    required
                    autoComplete="email"
                    className="w-full px-[18px] py-2 dark:text-accent rounded-full border dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-accent/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                {/* message */}
                <div className="space-y-2 mb-4">
                  <label htmlFor="message" className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t('form.messagePlaceholder')}
                    required
                    className="w-full px-[18px] py-2 rounded-xl dark:bg-background-6 border dark:text-accent border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    {t('form.terms')}{' '}
                    <Link href="#" className="text-primary-500 underline text-tagline-3">
                      {t('form.termsLink')}
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-md btn-secondary dark:btn-accent w-full before:content-none first-letter:uppercase hover:btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting
                    ? locale === 'nl'
                      ? 'Verzenden...'
                      : 'Submitting...'
                    : t('form.submit')}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
