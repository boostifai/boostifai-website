'use client';

import testimonials from '@/data/json/testimonials/testimonials.json';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface TestimonialProps {
  title?: string;
  classname?: string;
}

const Testimonial = ({ title, classname }: TestimonialProps) => {
  const t = useTranslations('HomePage.testimonials');
  
  return (
    <section
      className={cn(
        'bg-background-2 dark:bg-background-5 pt-20 pb-14 md:pt-24 md:pb-16 lg:pt-[150px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]',
        classname,
      )}>
      <div className="mx-auto max-w-[1440px] px-4 md:px-[67px]">
        {/* Header Section */}
        <div className="mb-14 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.2}>
            {title ? (
              <h2 className="mb-3 max-w-[750px] mx-auto">{title}</h2>
            ) : (
              <h2 className="mb-3">
                {t('title')}
              </h2>
            )}
          </RevealAnimation>
        </div>
      </div>

      {/* Review Cards */}
      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill pauseOnHover className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-8 py-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`min-h-[245px] max-w-[340px] min-w-[340px] sm:max-w-[358px] sm:min-w-[358px] ${index === 0 ? 'ml-8' : ''}`}>
                  <div className="dark:bg-background-6 h-full w-full space-y-8 rounded-[20px] bg-white p-8">
                    <p className="text-secondary dark:text-accent line-clamp-3 max-w-[297px] text-wrap">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="border-stroke-4 dark:border-stroke-5 border-t" />
                    <figure className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        className="size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] object-cover object-center"
                        alt={`${testimonial.name}'s avatar`}
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                      <figcaption>
                        <h3 className="text-tagline-1 dark:text-accent font-medium">{testimonial.name}</h3>
                        <p className="text-tagline-2 dark:text-accent/60">{testimonial.position}</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};
Testimonial.displayName = 'Testimonial';
export default Testimonial;
