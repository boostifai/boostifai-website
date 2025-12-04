'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { CheckIcon } from '@/icons';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [pricingType, setPricingType] = useState<'business' | 'agency'>('business');

  const businessPricing = {
    monthly: [
      {
        id: 1,
        title: 'Starter',
        description: 'Ideal for a small website or blog',
        price: 147,
        variant: 'basic' as const,
        features: [
          { label: '1 Website', enabled: true },
          { label: 'SEO automation up to 100 pages', enabled: true },
          { label: '1 AI Blog per month', enabled: true },
          { label: 'Rank Analyzer', enabled: true },
          { label: 'On-page SEO improvements', enabled: true },
          { label: 'Link Building', enabled: false },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'Monthly video call', enabled: false },
        ],
      },
      {
        id: 2,
        title: 'Professional',
        description: 'Perfect for a professional website',
        price: 247,
        variant: 'basic' as const,
        features: [
          { label: '1 to 4 Websites', enabled: true },
          { label: 'SEO automation up to 500 pages', enabled: true },
          { label: '5 AI Blogs per month per site', enabled: true },
          { label: 'Rank Analyzer', enabled: true },
          { label: 'On-page SEO improvements', enabled: true },
          { label: 'Link Building', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'Monthly video call', enabled: true },
        ],
      },
      {
        id: 3,
        title: 'Corporate',
        description: 'The best for high traffic websites',
        price: 499,
        variant: 'premium' as const,
        highlight: 'Most Popular',
        features: [
          { label: '1 to 10 Websites', enabled: true },
          { label: 'SEO automation up to 2000 pages', enabled: true },
          { label: '6 AI Blogs per month per site', enabled: true },
          { label: 'Rank Analyzer', enabled: true },
          { label: 'On-page SEO improvements', enabled: true },
          { label: 'Link Building', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'Monthly video call', enabled: true },
        ],
      },
      {
        id: 4,
        title: 'Enterprise',
        description: 'Perfect for large companies',
        price: null,
        variant: 'enterprise' as const,
        features: [
          { label: 'Unlimited Websites', enabled: true },
          { label: 'Unlimited Pages', enabled: true },
          { label: 'Unlimited AI Blogs', enabled: true },
          { label: 'Rank Analyzer', enabled: true },
          { label: 'On-page SEO improvements', enabled: true },
          { label: 'Link building', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'On Demand Course: Future of SEO', enabled: true },
        ],
      },
    ],
    quarterly: [
      { ...{ price: 132 } },
      { ...{ price: 224 } },
      { ...{ price: 453 } },
      { ...{ price: null } },
    ],
    yearly: [
      { ...{ price: 120 } },
      { ...{ price: 205 } },
      { ...{ price: 415 } },
      { ...{ price: null } },
    ],
  };

  const agencyPricing = {
    monthly: [
      {
        id: 1,
        title: 'Starter',
        description: 'Manage up to 4 client websites',
        price: 247,
        variant: 'basic' as const,
        features: [
          { label: '1 to 4 client websites', enabled: true },
          { label: 'SEO automation up to 500 pages', enabled: true },
          { label: '5 AI Blogs monthly per site', enabled: true },
          { label: '1 user login', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'White-label reports', enabled: false },
          { label: 'Priority email support', enabled: false },
          { label: 'CRO scan & tips', enabled: false },
        ],
      },
      {
        id: 2,
        title: 'Professional',
        description: 'Manage up to 10 client websites',
        price: 499,
        variant: 'basic' as const,
        features: [
          { label: 'Up to 10 client websites', enabled: true },
          { label: 'SEO automation up to 2000 pages', enabled: true },
          { label: '6 AI Blogs monthly per site', enabled: true },
          { label: 'Up to 10 user logins', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'White-label reports', enabled: true },
          { label: 'Priority email support', enabled: true },
          { label: 'CRO scan & tips', enabled: true },
        ],
      },
      {
        id: 3,
        title: 'Premium',
        description: 'Manage up to 25 client websites',
        price: 999,
        variant: 'premium' as const,
        highlight: 'Most Popular',
        features: [
          { label: 'Up to 25 client websites', enabled: true },
          { label: 'SEO automation up to 5000 pages', enabled: true },
          { label: '7 AI Blogs monthly per site', enabled: true },
          { label: 'Up to 25 user logins', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'White-label reports', enabled: true },
          { label: 'Priority email support', enabled: true },
          { label: 'CRO scan & tips', enabled: true },
        ],
      },
      {
        id: 4,
        title: 'Enterprise',
        description: 'Manage unlimited client websites',
        price: null,
        variant: 'enterprise' as const,
        features: [
          { label: 'Unlimited client websites', enabled: true },
          { label: 'Unlimited pages', enabled: true },
          { label: 'Unlimited AI Blogs', enabled: true },
          { label: 'Unlimited user logins', enabled: true },
          { label: 'Monthly performance reports', enabled: true },
          { label: 'White-label reports', enabled: true },
          { label: 'Priority Support', enabled: true },
          { label: 'On Demand Course: Future of SEO', enabled: true },
        ],
      },
    ],
    quarterly: [
      { ...{ price: 224 } },
      { ...{ price: 453 } },
      { ...{ price: 899 } },
      { ...{ price: null } },
    ],
    yearly: [
      { ...{ price: 205 } },
      { ...{ price: 415 } },
      { ...{ price: 799 } },
      { ...{ price: null } },
    ],
  };

  const currentPricing = pricingType === 'business' ? businessPricing : agencyPricing;
  const plans = currentPricing.monthly.map((plan, index) => ({
    ...plan,
    price:
      billingCycle === 'monthly'
        ? plan.price
        : billingCycle === 'quarterly'
          ? currentPricing.quarterly[index].price
          : currentPricing.yearly[index].price,
  }));

  return (
    <section className="py-[100px] bg-white dark:bg-background-5 overflow-hidden">
      <div className="main-container">
        <div className="space-y-[72px]">
          {/* heading  */}
          <div className="flex flex-col items-center text-center relative">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-5"> Our pricing </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[650px] mx-auto mb-8">Select the pricing plan that best suits your needs</h2>
            </RevealAnimation>

            {/* Business/Agency Toggle */}
            <RevealAnimation delay={0.3}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <button
                  onClick={() => setPricingType('business')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    pricingType === 'business'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  Business
                </button>
                <button
                  onClick={() => setPricingType('agency')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    pricingType === 'agency'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  Agency
                </button>
              </div>
            </RevealAnimation>

            {/* Billing Cycle Tabs */}
            <RevealAnimation delay={0.4}>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    billingCycle === 'quarterly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  Quarterly
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      billingCycle === 'quarterly' ? 'bg-white/20 text-white' : 'bg-green-500 text-white'
                    }`}>
                    -10%
                  </span>
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    billingCycle === 'yearly'
                      ? 'bg-primary-500 text-white'
                      : 'bg-background-3 dark:bg-background-8 text-secondary dark:text-accent hover:bg-primary/10'
                  }`}>
                  Yearly
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

          {/* pricing cards */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center gap-8">
              {plans.map((plan, idx) => (
                <RevealAnimation key={plan.id} delay={0.5 + idx * 0.1}>
                  <div
                    className={cn(
                      'w-full rounded-[20px] h-full flex flex-col',
                      plan.variant === 'premium'
                        ? 'bg-primary-100 dark:bg-background-9 p-2'
                        : 'bg-background-3 dark:bg-background-7 p-8',
                    )}>
                    <div className={cn('flex flex-col h-full', plan.variant === 'premium' && 'rounded-[12px] bg-primary-500 p-8')}>
                      {/* Highlight Badge */}
                      {plan.highlight && (
                        <div className="-mt-3 mb-2.5 flex justify-end">
                          <span className="bg-ns-green text-background-8 -mr-4 rounded-full px-3 py-1.5 font-normal capitalize">
                            {plan.highlight}
                          </span>
                        </div>
                      )}

                      {/* Title + Description */}
                      <h3
                        className={cn(
                          'mb-2 font-normal text-heading-5',
                          plan.variant === 'premium' && 'text-white',
                        )}>
                        {plan.title}
                      </h3>
                      <p
                        className={cn(
                          'mb-6',
                          plan.variant === 'premium' ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                        )}>
                        {plan.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-7">
                        <h4 className={cn('text-heading-4 font-normal', plan.variant === 'premium' && 'text-white')}>
                          {plan.price ? `€${plan.price}` : 'Contact us'}
                        </h4>
                        {plan.price && (
                          <p className={cn(plan.variant === 'premium' ? 'text-white' : 'text-secondary dark:text-accent')}>
                            Per Month
                          </p>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href="/contact-us"
                        className={cn(
                          'btn btn-md w-full block text-center mb-8 before:content-none first-letter:uppercase',
                          plan.variant === 'basic' && 'btn-white hover:btn-primary dark:btn-white-dark',
                          plan.variant === 'premium' && 'btn-accent hover:btn-secondary dark:hover:btn-secondary',
                          plan.variant === 'enterprise' && 'btn-white hover:btn-primary dark:btn-white-dark',
                        )}>
                        {plan.price ? 'Get started' : 'Contact us'}
                      </Link>

                      {/* Features */}
                      <ul className="relative list-none space-y-2.5 flex-grow">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center shrink-0 gap-2.5">
                            <span
                              className={cn(
                                'size-5 rounded-full',
                                feature.enabled
                                  ? plan.variant === 'premium'
                                    ? 'bg-white dark:bg-accent'
                                    : 'bg-secondary dark:bg-accent'
                                  : plan.variant === 'premium'
                                    ? 'bg-accent/20'
                                    : 'bg-white dark:bg-accent/10',
                              )}>
                              <CheckIcon
                                className={cn(
                                  feature.enabled
                                    ? plan.variant === 'premium'
                                      ? 'fill-secondary/60'
                                      : 'fill-white dark:fill-accent'
                                    : plan.variant === 'premium'
                                      ? 'fill-accent/60'
                                      : 'fill-secondary/60 dark:fill-accent/60',
                                )}
                              />
                            </span>
                            <span
                              className={cn(
                                'font-normal text-tagline-1',
                                feature.enabled
                                  ? plan.variant === 'premium'
                                    ? 'text-accent'
                                    : 'text-secondary dark:text-accent'
                                  : plan.variant === 'premium'
                                    ? 'text-accent/60'
                                    : 'text-secondary/60 dark:text-accent/60',
                              )}>
                              {feature.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
