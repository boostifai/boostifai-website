import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import BlogTabContent from './BlogTabContent';
import BlogTabList from './BlogTabList';

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-6 py-14 md:py-[100px]">
        <div className="main-container">
          <TabProvider defaultValue={0}>
            <BlogTabList />
            <BlogTabContent />
          </TabProvider>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;
