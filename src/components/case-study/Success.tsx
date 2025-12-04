import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

const caseStudies: ICaseStudy[] = getMarkDownData('src/data/case-study');

const Success = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">All case studies</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[738px] mx-auto">
                Discover how businesses and agencies are achieving remarkable results with Boostifai. Real stories,
                real growth, and measurable impact through AI-powered SEO automation.
              </p>
            </RevealAnimation>
          </div>
          {/* success blog   */}
          <div className="space-y-14">
            {/*  pagination  */}
            <CaseStudyPaginationWrapper caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
