'use client';

import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  const t = useTranslations('AgencyPricing');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const pricing = {
    monthly: { starter: 247, professional: 499, premium: 999, discount: '' },
    quarterly: { starter: 224, professional: 453, premium: 899, discount: '-10% discount' },
    yearly: { starter: 205, professional: 415, premium: 799, discount: '-20% discount' },
  };

  const currentPricing = pricing[billingCycle];

  const checkIcon = (active: boolean = true) => (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect
        width={18}
        height={18}
        rx={9}
        className={active ? 'fill-secondary dark:fill-accent' : 'fill-secondary/20 dark:fill-accent/20'}
      />
      <path
        d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
        className="fill-white dark:fill-black"
      />
    </svg>
  );

  const features = [
    t('features.clientWebsites'),
    t('features.seoPages'),
    t('features.aiBlogs'),
    t('features.userLogins'),
    t('features.monthlyReports'),
    t('features.whiteLabelReports'),
    t('features.prioritySupport'),
    t('features.croScan'),
    t('features.seoCourse'),
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section className="pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
        <div className="max-w-[1440px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-1 dark:bg-black py-[100px] px-5 md:px-6 lg:px-10 xl:px-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-primary">{t('badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>{t('title')}</h2>
            </RevealAnimation>

            {/* Billing Cycle Tabs */}
            <RevealAnimation delay={0.4}>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  {t('monthly')}
                </button>
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    billingCycle === 'quarterly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  {t('quarterly')}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      billingCycle === 'quarterly' ? 'bg-white/20 text-white' : 'bg-green-500 text-white'
                    }`}>
                    -10%
                  </span>
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    billingCycle === 'yearly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  {t('yearly')}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      billingCycle === 'yearly' ? 'bg-white/20 text-white' : 'bg-green-500 text-white'
                    }`}>
                    -20%
                  </span>
                </button>
              </div>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
            {/* Column 1 - Features List */}
            <RevealAnimation delay={0.4}>
              <div className="col-span-1">
                <div>
                  <div className="h-[225px] w-[290px] hidden md:block" />
                  <div className="space-y-[10px]">
                    <h3 className="text-heading-6">{t('whatsIncluded')}</h3>
                    <ul>
                      {features.map((feature, index) => (
                        <li key={index} className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                          <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Column 2 - Starter */}
            <RevealAnimation delay={0.5}>
              <div className="col-span-1">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">{t('plans.starter.name')}</p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          €{currentPricing.starter}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60">{t('plans.starter.description')}</p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full">
                        {t('getStarted')}
                      </Link>
                    </div>
                  </div>
                  <ul>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.starter.websites')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.starter.pages')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.starter.blogs')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.starter.users')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>

            {/* Column 3 - Professional */}
            <RevealAnimation delay={0.6}>
              <div className="col-span-1">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          {t('plans.professional.name')}
                        </p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                          €{currentPricing.professional}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60">{t('plans.professional.description')}</p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full">
                        {t('getStarted')}
                      </Link>
                    </div>
                  </div>
                  <ul>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.professional.websites')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.professional.pages')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.professional.blogs')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.professional.users')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>

            {/* Column 4 - Premium (Most Popular) */}
            <RevealAnimation delay={0.7}>
              <div className="col-span-1">
                <div>
                  <div className="px-4 relative z-10">
                    <div className="rounded-[20px] relative py-8 px-6 bg-secondary overflow-hidden">
                      <div className="absolute z-20 h-full w-full -top-28 -right-20">
                        <Image src={gradient4} alt="pricing bg" priority />
                      </div>
                      <div className="relative z-30 space-y-8">
                        <div>
                          {/* <span className="badge badge-primary mb-3">Most Popular</span> */}
                          <p className="text-tagline-1 text-accent/60 font-medium mb-3">{t('plans.premium.name')}</p>
                          <h3 className="text-heading-5 font-normal text-accent">€{currentPricing.premium}</h3>
                          <p className="text-accent/60">{t('plans.premium.description')}</p>
                        </div>
                        <Link
                          href="/contact-us"
                          className="btn btn-primary hover:btn-white dark:hover:btn-accent btn-md w-full">
                          {t('getStarted')}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.premium.websites')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.premium.pages')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.premium.blogs')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.premium.users')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(false)}
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>

            {/* Column 5 - Enterprise */}
            <RevealAnimation delay={0.8}>
              <div className="col-span-1">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          {t('plans.enterprise.name')}
                        </p>
                        <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">{t('plans.enterprise.price')}</h3>
                        <p className="text-secondary/60 dark:text-accent/60">{t('plans.enterprise.description')}</p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full">
                        {t('contactUs')}
                      </Link>
                    </div>
                  </div>
                  <ul>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.enterprise.unlimited')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.enterprise.unlimited')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.enterprise.unlimited')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                      <p className="font-medium text-secondary/60 dark:text-accent/60">{t('plans.enterprise.unlimited')}</p>
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                    <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                      {checkIcon(true)}
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Pricing;
