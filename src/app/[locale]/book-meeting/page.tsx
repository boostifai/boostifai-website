import RevealAnimation from '@/components/animation/RevealAnimation';
import BookingBenefits from '@/components/book-meeting/BookingBenefits';
import BookingHero from '@/components/book-meeting/BookingHero';
import BookingWidget from '@/components/book-meeting/BookingWidget';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import LinkButton from '@/components/ui/button/LinkButton';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { generateAlternates } from '@/utils/generateAlternates';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Book a Meeting | Boostifai',
    description: 'Schedule a free strategy call with our SEO experts to discuss how Boostifai can help grow your business.',
    alternates: generateAlternates(locale, '/book-meeting'),
  };
}

const BookMeeting = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-white backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 pb-20">
        <BookingHero />
        <BookingBenefits />
        <BookingWidget />
        <section className="pb-16 md:pb-50 lg:pb-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.6}>
            <LinkButton
              href="/contact-us"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md inline-flex w-fit">
              <span>Contact Us</span>
            </LinkButton>
          </RevealAnimation>
          </div>
          </section>
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

BookMeeting.displayName = 'BookMeeting';
export default BookMeeting;
