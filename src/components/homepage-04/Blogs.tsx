'use client';

import { IBlogPost } from '@/interface';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';

interface BlogsProps {
  blogs?: IBlogPost[];
}

const Blogs = ({ blogs = [] }: BlogsProps) => {
  const t = useTranslations('HomePage.blog');
  return (
    <section className="py-14 md:py-20 xl:py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary">{t('badge')}</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{t('title')}</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[738px]">
                {t('description')}
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <RevealAnimation key={blog.slug} delay={0.4 + index * 0.1}>
              <BlogCardV1 blog={blog} />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
