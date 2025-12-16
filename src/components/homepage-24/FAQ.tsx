'use client';

import gradient23 from '@public/images/gradient/gradient-23.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import LinkButton from '../ui/button/LinkButton';

const FAQ = () => {
  const t = useTranslations('HomePage.faq');
  
  // Get FAQ questions from translations
  const faqData = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    question: t(`questions.${i}.question`),
    answer: t(`questions.${i}.answer`)
  }));
  return (
    <section className="lg:pt-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16 bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-3 text-center lg:text-left mb-8">
              <RevealAnimation delay={0.1}>
                <h2>{t('title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>{t('description')}</p>
              </RevealAnimation>
            </div>
            <div className="mt-10">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/faq"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>{t('ctaButton')}</span>
            </LinkButton>
          </RevealAnimation>
        </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion
                  className="w-full max-w-[850px] space-y-4"
                  defaultValue="1"
                  enableScrollAnimation={true}
                  animationDelay={0.1}>
                  {faqData.map((item) => (
                    <AccordionItem
                      className="group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-[8px] px-6 overflow-hidden relative z-10"
                      key={item.id}
                      value={item.id.toString()}>
                      <figure className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
                        <Image src={gradient23} alt="gradient" />
                      </figure>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                        className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                        value={item.id.toString()}
                        iconType="plus">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
