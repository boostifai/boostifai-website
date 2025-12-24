'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import LightLogo from '@public/images/home-page-24/boostifai-logo-light.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import FooterDivider from './FooterDivider';

interface FooterThreeProps {
  className?: string;
  bgGradientImg?: StaticImageData;
  gradientClassName?: string;
}

const FooterThree: FC<FooterThreeProps> = ({ bgGradientImg, className, gradientClassName }) => {
  const t = useTranslations('Footer');
  
  return (
    <footer className={cn('dark:bg-background-8 relative overflow-hidden bg-white', className)}>
      <div className="main-container">
        {bgGradientImg && (
          <RevealAnimation delay={0.7} offset={100} direction="right">
            <figure className={cn('absolute overflow-hidden', gradientClassName)}>
              <Image src={bgGradientImg} alt="gradient-img" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
        )}

        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-16 lg:gap-x-8 xl:gap-x-0 xl:pt-[100px]">
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="xl:max-w-[306px]">
                <figure>
                  <Image src={LightLogo} className="" alt="NextSass" />
                </figure>
                <p className="text-secondary dark:text-accent mt-4 mb-7">
                  {t('tagline')}
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com" className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                      <path
                        d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.instagram.com" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="11"
                        y="5"
                        width="2"
                        height="2"
                        rx="1"
                        transform="rotate(-90 11 5)"
                        className="fill-secondary dark:fill-accent"
                      />
                      <rect
                        x="11.5"
                        y="4.5"
                        width="1"
                        height="1"
                        rx="0.5"
                        transform="rotate(-90 11.5 4.5)"
                        className="stroke-secondary dark:stroke-accent"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.youtube.com" className="footer-social-link">
                    <span className="sr-only">Youtube</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.668 15.0028C18.9724 15.0867 20.91 13.29 21 10.9858V5.01982C20.91 2.71569 18.9724 0.918929 16.668 1.00282H5.332C3.02763 0.918929 1.08998 2.71569 1 5.01982V10.9858C1.08998 13.29 3.02763 15.0867 5.332 15.0028H16.668Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.508 5.17711L13.669 7.32511C13.8738 7.44468 13.9997 7.66398 13.9997 7.90111C13.9997 8.13824 13.8738 8.35754 13.669 8.47711L10.508 10.8271C9.908 11.2341 9 10.8871 9 10.2511V5.75111C9 5.11811 9.909 4.77011 10.508 5.17711Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                      <path
                        d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 lg:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    {t('company')}
                  </p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/about" className="footer-link-v2">
                        {t('aboutUs')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/newsletter" className="footer-link-v2">
                        {t('newsletter')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/affiliates" className="footer-link-v2">
                        {t('affiliates')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-meeting" className="footer-link-v2">
                        {t('bookMeeting')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.5}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    {t('support')}
                  </p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/tour" className="footer-link-v2">
                        {t('dashboardTour')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="footer-link-v2">
                        {t('contactUs')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorials" className="footer-link-v2">
                        {t('tutorials')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/ebooks/ultimate-seo-guide" className="footer-link-v2">
                        {t('freeEbook')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.6}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    {t('legal')}
                  </p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/faq" className="footer-link-v2">
                        {t('faq')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions" className="footer-link-v2">
                        {t('termsConditions')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="footer-link-v2">
                        {t('privacyPolicy')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy" className="footer-link-v2">
                        {t('refundPolicy')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-6 pb-[60px] text-center">
          <FooterDivider className="bg-stroke-2 dark:bg-accent/5" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-secondary dark:text-accent/60">
              {t('copyright')}
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
