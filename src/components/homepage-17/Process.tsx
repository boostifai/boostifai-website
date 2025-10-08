'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import pixel from '@public/images/home-page-24/carbon (11).png';
import team from '@public/images/our-team/team-member-single.png'
import boost from '@public/images/home-page-24/pixel-boost.png';
import review from '@public/images/home-page-24/pixel-review.png';

const Process = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-14">
        <div className="space-y-5 text-center mx-auto lg:text-left lg:mx-0">
          <RevealAnimation delay={0.2}>
            {/* <span className="badge inline-block bg-primary-500 text-white">Our Process</span> */}
            {/* <span className="badge badge-green mb-5"> Our Process </span> */}
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="lg:max-w-[500px]">From install to traffic boost simplified</h2>
          </RevealAnimation>
        </div>
        <div ref={ref} className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-[62px]">
          {/* step one  */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-3 max-w-[408px] w-full">
              {/* progress bar  */}
              <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative">
                <div className="progress-line w-0 bg-[#ff5723] rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-md font-medium text-black">01</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Install & Connect</h2>
                <p className="max-w-[260px] w-full">Add the Boostifai pixel to your site in minutes—no coding required.</p>
                <Image src={pixel} alt="step one" className="w-full mt-5 rounded-sm" />
              </div>
            </div>
          </RevealAnimation>
          {/* step two  */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3 max-w-[408px] md:w-full">
              {/* progress bar  */}
              <div className="relative w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full">
                <div className="progress-line w-[0%] bg-[#ff5723] rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-md font-medium text-black">02</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Review & Approve</h2>
                <p>Check AI-powered SEO suggestions and approve them with a single click.</p>
                <div className="bg-[#D8D9DC] rounded-sm">
                  <Image src={review} alt="step one" className="w-[389px] h-[246px] mt-5 rounded-[22px] p-4.5" />
                </div>
              </div>
            </div>
          </RevealAnimation>
          {/* step three  */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-3 max-w-[408px] md:w-full">
              {/* progress bar  */}
              <div className="relative w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full">
                <div className="progress-line w-[0%] bg-[#ff5723] rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-md font-medium text-black">03</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Boost & Track</h2>
                <p>Watch your website rise as Boostifai automatically improves your rankings in real time.</p>
                <div className="bg-[#D8D9DC] rounded-sm">
                  <Image src={boost} alt="step one" className="w-[389px] h-[246px] mt-5 rounded-[22px] p-4.5" />
                </div>
              
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Process;
