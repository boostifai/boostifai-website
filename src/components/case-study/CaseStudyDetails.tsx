import { ICaseStudy } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyTestimonial from './CaseStudyTestimonial';

interface CaseStudyDetailsProps {
  slug: string;
}

const CaseStudyDetails = ({ slug }: CaseStudyDetailsProps) => {
  // @ts-expect-error - ICaseStudy is not defined
  const caseStudy: ICaseStudy = getMarkDownContent('src/data/case-study/', slug);

  return (
    <section className="pt-7 pb-24 md:pb-28 lg:pb-32 xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 ">{caseStudy.data.title || 'No description available'}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <figure className="max-w-[1290px] max-h-[700px] overflow-hidden rounded-4xl">
              <Image
                src={caseStudy.data.thumbnail}
                alt="Detailed view of Velocity Finance case study implementation"
                width={1290}
                height={800}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-12 max-w-[950px] mx-auto case-study-details">
            <div className="prose prose-lg dark:prose-invert max-w-none [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:mt-8 [&>h3]:mb-3 [&>h4]:mt-6 [&>h4]:mb-2 [&>p]:mb-4 [&>ul]:mb-4 [&>blockquote]:mb-4">
              <ReactMarkdown>{caseStudy.content || 'No content available'}</ReactMarkdown>
            </div>

            {/* GSC Images - Before and After */}
            {(caseStudy.data.beforeImage || caseStudy.data.afterImage) && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {caseStudy.data.beforeImage && (
                  <RevealAnimation delay={0.4}>
                    <div className="space-y-4">
                      <h4 className="text-heading-5">Before: June 2023</h4>
                      <figure className="overflow-hidden rounded-2xl">
                        <Image
                          src={caseStudy.data.beforeImage}
                          alt="Before - 100 monthly clicks"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <p className="text-center font-medium">06/2023: 100 monthly clicks</p>
                    </div>
                  </RevealAnimation>
                )}
                {caseStudy.data.afterImage && (
                  <RevealAnimation delay={0.5}>
                    <div className="space-y-4">
                      <h4 className="text-heading-5">After: January 2024</h4>
                      <figure className="overflow-hidden rounded-2xl">
                        <Image
                          src={caseStudy.data.afterImage}
                          alt="After - 3,500+ monthly clicks"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <p className="text-center font-medium">01/2024: 3,500+ monthly clicks</p>
                    </div>
                  </RevealAnimation>
                )}
              </div>
            )}

            {/* result  */}
            <div>
              <RevealAnimation delay={0.6}>
                <h3 className="text-heading-4">The results</h3>
              </RevealAnimation>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
                {/* 1st column  */}
                <RevealAnimation delay={0.5}>
                  <div className="max-w-[306] [&>p]:border-b [&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 [&>p]:last:border-b-0">
                    <p className="py-4 text-secondary dark:text-accent font-medium">Metric</p>
                    <p className="py-4">Monthly clicks</p>
                    <p className="py-4">SEO workflow</p>
                    <p className="py-4">Ranking keywords</p>
                    <p className="py-4">Scalibility</p>
                  </div>
                </RevealAnimation>
                {/* 2nd column  */}
                <RevealAnimation delay={0.6}>
                  <div className="max-w-[306] text-center px-6 bg-white dark:bg-background-6 rounded-[20px] [&>p]:border-b [&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 [&>p]:last:border-b-0">
                    <p className="py-4 text-secondary font-medium border-b dark:text-accent">Before</p>

                    {caseStudy.data.before?.map((item: string, index: number) => (
                      <p key={index} className="py-4 border-b last:border-b-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </RevealAnimation>
                {/* 3rd column  */}
                <RevealAnimation delay={0.7}>
                  <div className="max-w-[306] text-center px-6 [&>p]:border-b [&>p]:border-b-stroke-4 dark:[&>p]:border-b-stroke-7 [&>p]:last:border-b-0 bg-white dark:bg-background-6 rounded-[20px]">
                    <p className="py-4 text-secondary dark:text-accent font-medium">After</p>
                    {caseStudy.data.after?.map((item: string, index: number) => (
                      <p key={index} className="py-4 border-b last:border-b-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </RevealAnimation>
              </div>
            </div>
            {/* testimonial  */}
            <CaseStudyTestimonial userReview={caseStudy.data.userReview} />

            {/* feature  */}
            <RevealAnimation delay={0.2}>
              <div className="space-y-6">
                <h5 className="text-heading-4">Key Features Used</h5>
                <ul className="space-y-2">
                  {caseStudy.data.keyFeatures?.map((feature: string, index: number) => (
                    <li key={index} className="text-secondary/60 dark:!text-accent/60">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;
