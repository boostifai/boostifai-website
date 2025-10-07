import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import us from '@public/images/home-page-24/uss.png'

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-15',
    title: 'Agencies & SaaS',
    description: 'Deliver measurable SEO results at scale. Automate on-page fixes, content updates, and reporting for every client.',
    side: 'left',
  },
  {
    id: 2,
    icon: 'ns-shape-24',
    title: 'Real estate',
    description: 'Dominate local searches, generate qualified leads, and improve visibility across property listings.',
    side: 'left',
  },
  {
    id: 3,
    icon: 'ns-shape-9',
    title: 'E-commerce',
    description: 'Boost conversions, minimize cart abandonment, and increase average order value.',
    side: 'left',
  },
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'Healthcare',
    description: 'Build trust online, enhance search rankings, and attract patients with accurate, optimized local content.',
    side: 'right',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Local business',
    description: 'Rank higher on Google Maps, get more reviews, and grow foot traffic through automated SEO improvements.',
    side: 'right',
  },
  {
    id: 6,
    icon: 'ns-shape-36',
    title: 'Education',
    description: 'Increase enrollments, improve keyword visibility, and reach more students through optimized content creation.',
    side: 'right',
  },
];

const WhyUs = () => {
  const leftFeatures = featureItems.filter((item) => item.side === 'left');
  const rightFeatures = featureItems.filter((item) => item.side === 'right');

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="main-container">
          <div className="py-[42px] bg-secondary rounded-4xl px-6 sm:px-14 relative z-10 overflow-hidden">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="-z-10 absolute -right-[120%] -top-[44%] sm:-right-[100%] sm:-top-[35%] md:-right-[104%] md:-top-[78%] lg:-right-[74%] lg:-top-[78%] xl:-right-[54%] xl:-top-[58%] -rotate-[290deg] sm:-rotate-[260deg] size-[1060px] pointer-events-none select-none">
                <Image src="/images/gradient/gradient-6.png" alt="gradient" width={1060} height={1060} />
              </figure>
            </RevealAnimation>
            <div className="space-y-[70px] relative z-10">
              <div className="md:w-full space-y-7 text-center md:text-left">
                <div className="md:w-full space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[571px] text-accent">Smarter SEO for Every Industry</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[448px] md:w-full text-accent/60">
                      AI-powered recommendations, automated blogs, and real-time optimizations tailored to your business.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.4}>
                  <div>
                    <LinkButton href="/features-01" className="btn btn-dark btn-md hover:btn-white">
                      Explore all features
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              <div className="max-w-[1178px] mx-auto flex items-center flex-col gap-y-8 sm:gap-y-0 sm:gap-x-8 md:flex-row justify-between">
                <div className="max-w-[300px] md:w-full space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-4">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] rounded-2xl md:w-full order-last md:order-none">
                    <Image
                      src={us}
                      alt="Investment platform interface showing key features"
                      className="rounded-2xl"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                <div className="max-w-[300px] md:w-full space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default WhyUs;
