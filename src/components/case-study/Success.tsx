'use client';

import { ICaseStudy } from '@/interface';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

interface SuccessProps {
  caseStudies: ICaseStudy[];
}

const Success = ({ caseStudies }: SuccessProps) => {
  const t = useTranslations('CaseStudyPage.allCaseStudies');
  
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">{t('title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[738px] mx-auto">
                {t('description')}
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
