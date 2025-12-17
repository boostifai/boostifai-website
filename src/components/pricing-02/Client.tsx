'use client';
import avatar1 from '@public/images/home-page-24/avatar-1.webp';
import avatar2 from '@public/images/home-page-24/avatar-2.webp';
import avatar3 from '@public/images/home-page-24/avatar-3.webp';
import gradient6Img from '@public/images/gradient/gradient-6.png';
import clientLogo1 from '@public/images/logo/01.webp';
import clientLogo2 from '@public/images/logo/02.png';
import clientLogo3 from '@public/images/logo/03.png';
import clientLogo4 from '@public/images/logo/04.webp';
import clientLogo5 from '@public/images/logo/05.png';
import clientLogo6 from '@public/images/logo/06.webp';
import clientLogo7 from '@public/images/logo/07.png';
import clientLogo8 from '@public/images/logo/08.avif';
import clientLogo9 from '@public/images/logo/09.avif';
import clientLogo10 from '@public/images/logo/10.avif';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

const Client = () => {
  const t = useTranslations('HomePage.heroAvatar');
  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container text-center rounded-4xl py-[100px] -z-0 bg-background-3 dark:bg-background-5 overflow-hidden relative">
          <div
            className="absolute -top-[164%] rotate-[21deg] -left-[35%] w-full h-full -z-10 select-none pointer-events-none"
            aria-hidden="true">
            <Image src={gradient6Img} alt="Decorative gradient background overlay" className="scale-[60%]" />
          </div>
          {/* Customer Testimonial */}
          <article className="text-center space-y-4 pb-10">
            {/* Customer Avatars */}
            <div className="flex justify-center -space-x-2.5 cursor-pointer" role="group" aria-label="Customer avatars">
              <Image
                className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-yellow"
                src={avatar1}
                alt="Customer avatar 1"
                width={38}
                height={38}
              />
              <Image
                className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-red"
                src={avatar2}
                alt="Customer avatar 2"
                width={38}
                height={38}
              />
              <Image
                className="inline-block size-[38px] rounded-full relative z-0 ring-2 ring-accent dark:ring-black bg-ns-green"
                src={avatar3}
                alt="Customer avatar 3"
                width={38}
                height={38}
              />
              <div className="inline-flex items-center relative z-10 justify-center size-[38px] bg-ns-cyan rounded-full ring-2 ring-accent dark:ring-black text-secondary/80 dark:text-accent/80 text-tagline-3 font-medium">
                99+
              </div>
            </div>
            {/* Trust Metrics */}
            <div>
              <p className="text-tagline-2 text-secondary dark:text-accent font-medium">{t('trustedBy')}</p>
              <p className="text-tagline-3">{t('customers')}</p>
            </div>
          </article>
          {/* Client Logos */}
          <div className="max-w-[1130px] mx-auto relative">
            <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-5 z-40" />
            <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-5 z-40" />
            <Marquee autoFill speed={60}>
              <div
                className="flex items-center justify-center border-t border-secondary/10 dark:border-accent/10 pt-10 gap-8"
                role="group">
                <figure className="min-w-[140px] md:min-w-[201px] ml-8">
                  <Image
                    src={clientLogo1}
                    alt="Client company logo 1"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo1}
                    alt="Client company logo 1"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo2}
                    alt="Client company logo 2"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo2}
                    alt="Client company logo 2"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                                       <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo7}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo7}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo3}
                    alt="Client company logo 3"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo3}
                    alt="Client company logo 3"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo4}
                    alt="Client company logo 4"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo4}
                    alt="Client company logo 4"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo5}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo5}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                                {/* <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo6}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo6}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure> */}
         
                                 {/* <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo8}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo8}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                                 <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo9}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo9}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure> */}
                                 <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo10}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo10}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
              </div>
            </Marquee>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Client;
