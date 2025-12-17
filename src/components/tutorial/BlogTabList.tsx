'use client';

import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  const t = useTranslations('TutorialsPage.tabs');
  
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          {t('all')}
        </Tab>
        <Tab index={1} variant="desktop">
          {t('dashboard')}
        </Tab>
        <Tab index={2} variant="desktop">
          {t('integration')}
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {t('all')}
        </Tab>
        <Tab index={1} variant="mobile" className="text-nowrap">
          {t('dashboard')}
        </Tab>
        <Tab index={2} variant="mobile">
          {t('integration')}
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;
