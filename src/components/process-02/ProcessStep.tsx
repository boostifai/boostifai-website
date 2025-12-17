'use client';
import { useGSAP } from '@gsap/react';
import stepDark from '@public/images/home-page-15/step-dark.png';
import step from '@public/images/home-page-15/step.png';
import step1Image from '@public/images/our-process/step1.webp';
import step2Image from '@public/images/our-process/step2.webp';
import step3Image from '@public/images/our-process/step3.webp';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { useTranslations } from 'next-intl';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProcessStep = () => {
  const t = useTranslations('ProcessPage.steps');
  const stepLine1 = useRef<SVGSVGElement>(null);
  const stepLine2 = useRef<SVGSVGElement>(null);

  const scopeRef = useRef<HTMLDivElement | null>(null);

  const animationInitialized = useRef(false);

  useGSAP(
    () => {
      if (animationInitialized.current) return;
      animationInitialized.current = true;

      const stepLines = [stepLine1.current, stepLine2.current].filter(Boolean) as SVGSVGElement[];

      if (!stepLines.length) return;

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: 600,
          duration: 1.5,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },

    { scope: scopeRef },
  );
  return (
    <section className="pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{t('title')}</h2>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="process-steps">
            <div className="max-w-[870px] mx-auto mb-[100px]">
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                      <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[550px] lg:h-[600px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg
                      ref={stepLine1}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1 h-[0px] step-line"
                      viewBox="0 0 2 600"
                      fill="none"
                      preserveAspectRatio="none">
                      <path
                        d="M1 1L0.99999 599"
                        stroke="url(#paint0_linear_1182_24963_step1)"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1182_24963_step1"
                          x1="0.5"
                          y1={1}
                          x2="0.49999"
                          y2={599}
                          gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset={1} stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <RevealAnimation delay={0.2}>
                  <div className="card-item absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-sm:bg-background-4">
                    
                    <p className="text-tagline-2 text-primary-500">STEP 1</p>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 lg:text-heading-5">{t('step1Title')}</h3>
                      <p>{t('step1Description')}</p>
                      <figure className="mt-3 rounded-lg overflow-hidden">
                        <Image
                          src={step1Image}
                          alt="Install the Boostifai Pixel"
                          className="w-full h-auto object-contain"
                        />
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                      <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[550px] lg:h-[600px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg
                      ref={stepLine2}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1 h-[0px] step-line"
                      viewBox="0 0 2 600"
                      fill="none"
                      preserveAspectRatio="none">
                      <path
                        d="M1 1L0.99999 599"
                        stroke="url(#paint0_linear_1182_24963_step2)"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1182_24963_step2"
                          x1="0.5"
                          y1={1}
                          x2="0.49999"
                          y2={599}
                          gradientUnits="userSpaceOnUse">
                          <stop offset={0} stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset={1} stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <RevealAnimation delay={0.3}>
                  <div className="card-item absolute lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-sm:bg-background-4">
                    
                    <p className="text-tagline-2 text-primary-500">STEP 2</p>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 lg:text-heading-5 max-w-[293px]">{t('step2Title')}</h3>
                      <p>{t('step2Description')}</p>
                      <figure className="mt-3 rounded-lg overflow-hidden">
                        <Image src={step2Image} alt="Check suggestions" className="w-full h-auto object-contain" />
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <div className="relative min-h-[550px] lg:min-h-[600px]">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                      <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <RevealAnimation delay={0.4}>
                  <div className="card-item absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-[80px] max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-sm:bg-background-4">
                    
                    <p className="text-tagline-2 text-primary-500">STEP 3</p>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 lg:text-heading-5 max-w-[203px]">{t('step3Title')}</h3>
                      <p>{t('step3Description')}</p>
                      <figure className="mt-3 rounded-lg overflow-hidden">
                        <Image src={step3Image} alt="Get boosted!" className="w-full h-auto object-contain" />
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessStep;
