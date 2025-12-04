'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  // {
  //   id: 1,
  //   icon: 'ns-shape-3',
  //   title: 'Automated SEO solutions',
  //   description:
  //     'AI-powered automation for your SEO efforts. Spend less time on webpages, more time on what you do best.',
  // },
  {
    id: 2,
    icon: 'ns-shape-12',
    title: 'Auto Blogging',
    description:
      'Generates niche-relevant blog posts tailored to your business. Fresh, engaging content without any effort.',
  },
  {
    id: 3,
    icon: 'ns-shape-55',
    title: 'Rank analyzer',
    description:
      "Real-time insights into your website's Google rankings. Monitor performance and make informed decisions that boost visibility.",
  },
  {
    id: 4,
    icon: 'ns-shape-36',
    title: 'Link building',
    description:
      "Strategic link building to improve visibility. Internal links help Google rank your site higher, attracting organic traffic.",
  },
  {
    id: 5,
    icon: 'ns-shape-106',
    title: 'AI insight',
    description:
      "Intelligent recommendations powered by AI. Understand what works and receive actionable insights to improve your SEO strategy.",
  },
  // {
  //   id: 6,
  //   icon: 'ns-shape-46',
  //   title: 'Real-time updates',
  //   description:
  //     'Instant insights into SEO performance with AI technology. Keep your site updated with the latest best practices.',
  // },
  // {
  //   id: 7,
  //   icon: 'ns-shape-24',
  //   title: 'On-page SEO improvements',
  //   description:
  //     'Adjustments made directly within webpages. Our AI optimizes meta tags, headings, and content structure automatically.',
  // },
  {
    id: 8,
    icon: 'ns-shape-7',
    title: 'No technical skills needed',
    description:
      'AI tools work behind the scenes to rank your website higher. Easily implement without technical knowledge. Works with any CMS.',
  },
  {
    id: 9,
    icon: 'ns-shape-9',
    title: 'Cost-effective',
    description:
      'Reduce ad spend by growing visibility organically. Achieve more with less investment through automated solutions.',
  },
];

const Services = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[50px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="md:max-w-[828px] sm:max-w-[600px] max-[375px]:max-w-[270px] mx-auto">
              Key Benefits of boostifai
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="md:max-w-[606px] sm:max-w-[400px] max-w-[390px] mx-auto">
              Automate your SEO with AI-powered tools that work 24/7. Save time and boost rankings
            </p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6 mb-14">
          {services.map((service, index) => (
            <div key={service.id} className="col-span-12 md:col-span-6 lg:col-span-4 flex">
              <RevealAnimation delay={0.3 + index * 0.1} className="flex w-full">
                <div className="bg-white dark:bg-background-6 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4 flex flex-col w-full">
                  {/* Service Icon */}
                  <div>
                    <span
                      className={cn(service.icon, 'sm:text-[52px] text-[40px] text-secondary dark:text-accent')}></span>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="sm:text-heading-5 text-heading-6">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/our-services-02"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>Explore the platform</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
