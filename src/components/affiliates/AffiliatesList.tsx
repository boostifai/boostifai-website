'use client';

import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const AffiliatesList = () => {
  const t = useTranslations('AffiliatesPage');
  const services = [
    t('services.service1'),
    t('services.service2'),
  ];

  const faqItems = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
  ];

  return (
    <article className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] space-y-10 md:space-y-[70px]">
      {/* Services Section */}
      <RevealAnimation delay={0.1}>
        <div>
          <h3 className="text-heading-6 md:text-heading-5 font-normal mb-3">{t('services.title')}</h3>
          <ul className="space-y-4">
            {services.map((item, itemIndex) => {
              const [title, ...descParts] = item.split(' - ');
              const description = descParts.join(' - ');
              
              return (
                <li
                  key={itemIndex}
                  className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:relative before:w-5 before:h-5 before:mr-3 before:left-0 before:content-[url('/images/icons/checkmark-dark.svg')] dark:before:content-[url('/images/icons/checkmark-dark.svg')] before:max-md:top-0 before:md:top-1 before:inline-block">
                  {description ? (
                    <>
                      <strong className="text-secondary dark:text-accent font-medium">{title}</strong>
                      {' - '}
                      {description}
                    </>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </RevealAnimation>

      {/* Testimonial Section */}
      <RevealAnimation delay={0.2}>
        <div>
          <h3 className="text-heading-6 md:text-heading-5 font-normal mb-3">{t('testimonial.title')}</h3>
          <div className="bg-secondary dark:bg-background-8 rounded-[20px] p-8 flex flex-col space-y-6 mt-6">
            <div>
              <p className="text-white dark:text-accent/60">
                &ldquo;{t('testimonial.text')}&rdquo;
              </p>
            </div>
            <div>
              <p className="text-white text-lg font-medium leading-[150%]">{t('testimonial.author')}</p>
              <p className="text-accent/60 text-tagline-2">{t('testimonial.company')}</p>
            </div>
          </div>
        </div>
      </RevealAnimation>

      {/* FAQ Section */}
      <RevealAnimation delay={0.3}>
        <div>
          <h3 className="text-heading-6 md:text-heading-5 font-normal mb-3">{t('faq.title')}</h3>
          <div className="mt-6">
            <Accordion
              className="w-full max-w-[850px] space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {faqItems.map((faq, faqIndex) => (
                <AccordionItem
                  className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
                  key={faqIndex + 1}
                  value={(faqIndex + 1).toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                    value={(faqIndex + 1).toString()}
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent value={(faqIndex + 1).toString()}>
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </RevealAnimation>
    </article>
  );
};

AffiliatesList.displayName = 'AffiliatesList';
export default AffiliatesList;
