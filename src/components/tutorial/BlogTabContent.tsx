'use client';
import { useTab } from '@/context/TabContext';
import blog1 from '@public/images/blogs/blog-32.png';
import blog2 from '@public/images/blogs/blog-32.png';
import blog3 from '@public/images/blogs/blog-33.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const BlogTabContent = () => {
  const { currentIndex: activeTab } = useTab();
  const t = useTranslations('TutorialsPage.tutorials');

  const blogs = [
    {
      id: 1,
      titleKey: 'tutorial1Title',
      subtitleKey: 'tutorial1Subtitle',
      readTimeKey: 'tutorial1ReadTime',
      tag: 'Integration',
      image: blog1,
    },
    {
      id: 2,
      titleKey: 'tutorial2Title',
      subtitleKey: 'tutorial2Subtitle',
      readTimeKey: 'tutorial2ReadTime',
      tag: 'Integration',
      image: blog2,
    },
    {
      id: 3,
      titleKey: 'tutorial3Title',
      subtitleKey: 'tutorial3Subtitle',
      readTimeKey: 'tutorial3ReadTime',
      tag: 'Dashboard',
      image: blog3,
    }
  ];

  const getFilteredBlogs = () => {
    if (activeTab === 0) return blogs;

    const tagMap = {
      1: 'Dashboard',
      2: 'Integration',
    };

    const selectedTag = tagMap[activeTab as keyof typeof tagMap];
    return blogs.filter((blog) => blog.tag === selectedTag);
  };

  const filteredBlogs = getFilteredBlogs();
  return (
    <div className="grid grid-cols-12 sm:gap-5 md:gap-8 gap-y-6 mt-20">
      {filteredBlogs.map((blog, index) => (
        <RevealAnimation key={blog.id} delay={0.1 + index * 0.1}>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <article className="bg-white dark:bg-background-5 rounded-[20px] overflow-hidden border border-stroke-4 dark:border-stroke-5 max-w-[500px] mx-auto md:mx-0 md:max-w-full">
              <figure>
                <Image src={blog.image} alt={t(blog.titleKey)} loading="lazy" className="w-full h-[300px] object-cover" />
              </figure>
              <div className="p-6 space-y-6">
                <div className="flex items-center xl:gap-6 gap-3.5">
                  <span className="badge badge-primary">{blog.tag}</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                      <path
                        d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10.5 5.625V10H14.875"
                        className="stroke-secondary dark:stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-tagline-3 font-normal text-secondary dark:text-accent whitespace-nowrap">
                      {t(blog.readTimeKey)}
                    </span>
                  </span>
                  
                </div>
                <div className="space-y-2">
                  <p className="xl:text-heading-5 text-heading-6 text-secondary dark:text-accent">{t(blog.titleKey)}</p>
                  <p className="line-clamp-2">{t(blog.subtitleKey)}</p>
                </div>
                <div>
                  <LinkButton
                    href="#"
                    className="btn hover:btn-secondary dark:hover:btn-accent dark:btn-transparent btn-white btn-md">
                    {t('readMore')}
                  </LinkButton>
                </div>
              </div>
            </article>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default BlogTabContent;
