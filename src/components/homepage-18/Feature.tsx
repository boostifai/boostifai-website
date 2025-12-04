import feature1Dark from '@public/images/home-page-18/feature-1-dark.png';
import feature1 from '@public/images/home-page-18/feature-1.png';
import feature2Dark from '@public/images/home-page-18/feature-2-dark.png';
import feature2 from '@public/images/home-page-18/feature-2.png';
import feature3Dark from '@public/images/home-page-18/feature-3-dark.png';
import feature3 from '@public/images/home-page-18/feature-3.png';
import feature4Dark from '@public/images/home-page-18/feature-4-dark.png';
import feature4 from '@public/images/home-page-18/feature-4.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import blog from '@public/images/home-page-24/blog.png';
import internallinks from '@public/images/home-page-24/internal-links.png';
import seotools from '@public/images/home-page-24/seo-tools.png';
import recommendations from '@public/images/home-page-24/recommendations2.png';

const Feature = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white dark:bg-black">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[750px] mx-auto mb-10 md:mb-[70px]">
          {/* <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Features</span>
          </RevealAnimation> */}
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">AI-powered SEO that runs on autopilot</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60 max-w-[600px] mx-auto">
                Smart recommendations, automated blogs, and continuous optimization—all in one platform. Automate SEO tasks with Boostifai and focus on your business.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 xl:mb-18">
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">AI recommendations that optimize everything</h5>
                <p className="max-w-[450px]">
                  Boostifai continuously scans your pages and delivers smart SEO suggestions—meta tags, headings, images, and internal links—ready for one-click approval.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={recommendations}
                  alt="feature image"
                  width={785}
                  height={221}
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
                <Image
                  src={recommendations}
                  alt="feature image"
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Automated internal linking</h5>
                <p className="max-w-[300px]">Connect your pages naturally with AI-driven internal links that strengthen site structure and boost keyword rankings</p>
              </div>
              <figure className="w-full">
                <Image
                  src={internallinks}
                  alt="feature image"
                  width={345}
                  height={226}
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
                <Image
                  src={feature2Dark}
                  alt="feature image"
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">All-in-one SEO toolkit</h5>
                <p className="">Access a complete suite of SEO tools—from audits to analytics—built to enhance visibility and drive consistent organic growth</p>
              </div>
              <figure className="w-full">
                <Image
                  src={seotools}
                  alt="feature image"
                  width={345}
                  height={230}
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
                <Image
                  src={feature3Dark}
                  alt="feature image"
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6">
              <div className="space-y-2 max-w-[485px]">
                <h5 className="max-sm:text-heading-6">Automated Intelligent blog creation</h5>
                <p className="max-w-[485px]">
                  Our AI generates optimized blog posts around your focus keywords and publishes them directly to your CMS—fresh, relevant, and SEO-ready content on autopilot.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={blog}
                  alt="feature image"
                  width={785}
                  height={238}
                  className="w-full h-full object-cover rounded-2xl block dark:hidden"
                />
                <Image
                  src={feature4Dark}
                  alt="feature image"
                  className="w-full h-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
