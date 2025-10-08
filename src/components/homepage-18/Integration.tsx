import gradient32 from '@public/images/gradient/gradient-32.png';
import gradient33 from '@public/images/gradient/gradient-33.png';
import gradient34 from '@public/images/gradient/gradient-34.png';
import gradient9 from '@public/images/gradient/gradient-9.png';
import integrationImage1 from '@public/images/home-page-18/integration-image-1.png';
import integrationImage2Dark from '@public/images/home-page-18/integration-image-2-dark.png';
import integrationImage2 from '@public/images/home-page-18/integration-image-2.png';
import integrationImage3Dark from '@public/images/home-page-18/integration-image-3-dark.png';
import integrationImage3 from '@public/images/home-page-18/integration-image-3.png';
import integrationImage4Dark from '@public/images/home-page-18/integration-image-4-dark.png';
import integrationImage4 from '@public/images/home-page-18/integration-image-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';
import datadriven from '@public/images/home-page-24/data-driven.svg';

const Integration = () => {
  return (
    <section className="bg-background-2 pt-16 md:pt-20 lg:pt-[90px] xl:pt-[150px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[250px]">
      <div className="">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row items-start gap-y-24 gap-x-[140px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-primary-light mb-5">Trust</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mb-3 max-w-[529px]">Why businesses trust Boostifai with their SEO</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mb-7 lg:max-w-[620px]">
                  AI-driven optimization that improves rankings, saves time, and scales effortlessly — all from one platform.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href="/process-01"
                    rel="noopener noreferrer"
                    className="btn btn-secondary hover:btn-primary dark:btn-transparent btn-md w-[85%] md:w-auto mx-auto">
                    Get started
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <StackCardWrapper
              topOffset="15vh"
              gap="24px"
              initDelay={100}
              className="w-full lg:flex-1 lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full">
              {/* Case Item 1*/}
              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full max-sm:min-h-[433px]">
                  <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                    {/* gradient border img  */}
                    <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-99%] left-[-52%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                      <Image src={gradient32} alt="gradient-border" className="w-full h-full object-cover" />
                    </figure>
                    <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                      <figcaption className="space-y-2">
                        <h5>Save time and resources</h5>
                        <p className="max-w-[250px]">
                          Boostifai handles routine SEO tasks automatically, freeing your team to focus on strategy and growth.
                        </p>
                      </figcaption>
                      <figure className="max-w-[385px] w-full">
                        <Image
                          src={integrationImage1}
                          alt="case icon"
                          className="w-full md:max-h-[300px] md:min-h-[300px]"
                        />
                      </figure>
                    </figure>
                  </div>
                </div>
              </StackCardItem>

              {/*Case Item 2*/}
              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full max-sm:min-h-[433px]">
                  <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                    {/* gradient border img  */}
                    <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-76%] md:top-[-111%] left-[-62%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                      <Image src={gradient33} alt="gradient-border" className="w-full h-full object-cover" />
                    </figure>
                    <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                      <figcaption className="space-y-2">
                        <h5>Data-driven growth</h5>
                        <p className="max-w-[250px]">Make smarter decisions with clear performance metrics and actionable insights that guide your SEO strategy.</p>
                      </figcaption>
                      <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                        <Image
                          src={datadriven}
                          alt="case icon"
                          className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                        />
                        <Image
                          src={integrationImage2Dark}
                          alt="case icon"
                          className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                        />
                      </div>
                    </figure>
                  </div>
                </div>
              </StackCardItem>

              {/*Case Item 3*/}
              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full max-sm:min-h-[433px]">
                  <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                    {/* gradient border img  */}
                    <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-75%] md:top-[-111%] left-[-65%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                      <Image src={gradient34} alt="gradient-border" className="w-full h-full object-cover" />
                    </figure>
                    <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                      <figcaption className="space-y-2">
                        <h5>Measure real impact</h5>
                        <p className="max-w-[250px]">Track your rankings, traffic, and conversions to see exactly how your optimization efforts pay off.</p>
                      </figcaption>
                      <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                        <Image
                          src={integrationImage3}
                          alt="case icon"
                          className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                        />
                        <Image
                          src={integrationImage3Dark}
                          alt="case icon"
                          className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                        />
                      </div>
                    </figure>
                  </div>
                </div>
              </StackCardItem>

              {/*Case Item 4*/}
              
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
