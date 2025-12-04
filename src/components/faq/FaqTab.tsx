import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import FaqTabContent from './FaqTabContent';
import FaqTabList from './FaqTabList';

const FaqTab = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-primary">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2>Commonly asked questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[600px] mx-auto">
                Find answers to the most frequently asked questions about Boostifai&apos;s AI-powered SEO automation.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="py-[70px]">
            <TabProvider defaultValue={0}>
              <FaqTabList />
              <FaqTabContent />
            </TabProvider>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FaqTab;
