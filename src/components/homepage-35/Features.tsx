import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pt-[100px] lg:pt-[150px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        {/* <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Trusted by businesses worldwide</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>Proven results backed by years of expertise and thousands of satisfied clients</p>
          </RevealAnimation>
        </div> */}
        <RevealAnimation delay={0.3}>
          <div className="flex md:flex-row flex-col py-6 md:px-0 px-6 bg-secondary dark:bg-background-6 rounded-[20px]">
            <RevealAnimation delay={0.4}>
              <div className="py-6 space-y-6 flex-1 md:border-b-0 border-b border-b-accent/20 md:border-r border-r-accent/20 dark:border-b-stroke-8 dark:border-r-stroke-8">
                <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-yellow rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-tagline-1 lg:text-heading-6 font-normal">55k+ SEO suggestions approved</h3>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="py-6 space-y-6 flex-1 md:border-b-0 border-b border-b-accent/20 md:border-r border-r-accent/20 dark:border-b-stroke-8 dark:border-r-stroke-8">
                <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-cyan rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-tagline-1 lg:text-heading-6 font-normal">20+ years in online marketing</h3>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="py-6 space-y-6 flex-1">
                <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-red rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-tagline-1 lg:text-heading-6 font-normal">122+ Happy clients</h3>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Features;
