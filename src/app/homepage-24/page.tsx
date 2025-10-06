import CTA from '@/components/homepage-22/CTA';
import Clients from '@/components/homepage-24/Clients';
import Contact from '@/components/homepage-24/Contact';
import FAQ from '@/components/homepage-24/FAQ';
import Features from '@/components/homepage-24/Features';
import Hero from '@/components/homepage-24/Hero';
import About from '@/components/homepage-01/About';
import Invitation from '@/components/homepage-24/Invitation';
import Process from '@/components/homepage-17/Process';
import Services from '@/components/homepage-24/Services';
import Testimonial from '@/components/homepage-24/Testimonial';
import WhyUs from '@/components/homepage-24/WhyUs';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import WhyUs2 from '@/components/homepage-33/WhyUs';
import Pricing from '@/components/homepage-02/Pricing';
import Integration from '@/components/homepage-10/Integration';
import FeatureV2 from '@/components/homepage-13/FeatureV2';
import Services2 from '@/components/homepage-15/Services';
import CTA2 from '@/components/homepage-14/CTA';
import Features3 from '@/components/homepage-17/Features';
import WhyChooseUs2 from '@/components/homepage-17/WhyChooseUs';
import Feature4 from '@/components/homepage-18/Feature';
import Integration2 from '@/components/homepage-18/Integration';
import FeatureV3 from '@/components/homepage-20/FeatureV2';
import Pricing2 from '@/components/homepage-28/Pricing';
import Audit from '@/components/homepage-33/Audit';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Insurance - NextSaaS',
};

const Homepage24 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
           {/* <NavbarOne
        className="bg-background-8 border border-stroke-2 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      /> */}
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        {/* <Clients />
        <Invitation /> */}
        {/* <Services /> */}
        {/* <About /> */}
                {/* <Services2 /> */}
                        <Feature4 />
          <Process />

                <Integration2 />
        {/* <WhyUs /> */}
         <WhyUs2 />
        <Integration />
        {/* <Features /> */}
        {/* <Pricing /> */}
         <FeatureV2 />

        <WhyChooseUs2 />
      
        {/* <FeatureV3 /> */}
<Features3 />
        <Pricing2 />

        <Audit />
        {/* <Testimonial /> */}
        <FAQ />
        {/* <Contact /> */}
                <CTA2 />
        {/* <CTA badgeClassName="text-ns-green" /> */}
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Homepage24;
