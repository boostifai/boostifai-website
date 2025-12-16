'use client';

import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  const t = useTranslations('FAQPage.tabs');
  
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          {t('business')}
        </Tab>
        <Tab index={1} variant="desktop">
          {t('agencies')}
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {t('business')}
        </Tab>
        <Tab index={1} variant="mobile">
          {t('agencies')}
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
