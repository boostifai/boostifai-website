import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Business
        </Tab>
        <Tab index={1} variant="desktop">
          Agencies
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Business
        </Tab>
        <Tab index={1} variant="mobile">
          Agencies
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
