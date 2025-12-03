import TabContent from '../ui/tab/TabContent';
import AgenciesTab from './AgenciesTab';
import BusinessTab from './BusinessTab';

const data = [
  {
    id: 1,
    tabTitle: 'Business',
    tabContent: <BusinessTab />,
  },
  {
    id: 2,
    tabTitle: 'Agencies',
    tabContent: <AgenciesTab />,
  },
];

const FaqTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
