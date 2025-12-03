import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const businessFaqData = [
  {
    id: 1,
    question: 'How does Boostifai stand out from other SEO tools? What are the differences?',
    answer:
      "Unlike traditional SEO tools that provide checklists and recommendations, Boostifai performs real-time adjustments directly on your website. This means faster implementation of SEO strategies, immediate optimization of content, and a significant reduction in manual work. Including content generation, meta tag management, keyword analysis, link building, adding blogs, and real-time on-page SEO adjustments directly within webpages.",
  },
  {
    id: 2,
    question: 'How does Boostifai integrate with our existing CMS platforms?',
    answer:
      "Boostifai is designed to seamlessly integrate with a wide range of CMS platforms. Our automated solutions can be activated with a single line of code, ensuring that optimizations are applied directly to your client's website. Check out this page for the easy set up process: https://www.boostifai.com/how-it-works/",
  },
  {
    id: 3,
    question: 'What are the main features of Boostifai?',
    answer:
      'Boostifai offers automated SEO optimizations, including content generation, meta tag management, keyword analysis, and real-time on-page SEO adjustments directly within webpages.',
  },
  {
    id: 4,
    question: 'How does Boostifai improve SEO performance?',
    answer:
      "Boostifai enhances SEO performance by automating tasks that improve website visibility, organic search rankings by creating blogs, backlinks and on-page SEO. Boostifai distinguishes itself from conventional SEO tools that operate at surface level, by facilitating on-page SEO improvements directly within website pages, ensuring immediate optimization of content, meta tags, and other essential elements on the client's site. This real-time capability provides integrated optimizations seamlessly to drive rapid results and enhance client satisfaction.\n\nBlog features:\n- Efficient content production: Automatically generated niche-relevant articles tailored to your clients' industries.\n- Enhanced client engagement: Topically relevant content that keeps your clients' audiences engaged and informed.\n- Professional imagery: Utilize niche-relevant featured and in-article images to enhance the visual appeal of your clients' blogs.\n- Optimized structure: Ensure all articles have well-structured headings for better readability and SEO performance.\n- Custom call-to-actions: Drive traffic to your clients' businesses with strategically placed external links and custom CTAs.\n- Seamless automation: Automate the entire content generation and posting process, freeing up your team to focus on more strategic tasks.",
  },
  {
    id: 5,
    question: 'How does Boostifai handle algorithm changes from search engines?',
    answer:
      'Boostifai updates its engine based on search engine algorithm. Our features are regularly updated to adapt to search engine algorithm changes and industry best practices.',
  },
  {
    id: 6,
    question: 'Is Boostifai compatible with multiple languages?',
    answer:
      'Yes, Boostifai supports many languages. However, at this time, we do NOT support domains with characters from non-Roman alphabets. That means no TLDs such as .рф, .中国, .みんな and others. If you need support for these domains, please message us. We might add them in the future.',
  },
  {
    id: 7,
    question: 'Does Boostifai provide reporting?',
    answer:
      'Yes, Boostifai generates detailed analytics and performance reports to track SEO progress and identify areas for improvement. Deliver branded SEO reports to your clients. We generate and review SEO performance reports to track progress and identify areas for improvement.',
  },
  {
    id: 8,
    question: 'What types of businesses benefit most from Boostifai?',
    answer:
      'Boostifai is beneficial for agencies, businesses, and e-commerce sites looking to optimize their online presence and drive growth through improved SEO practices.',
  },
  {
    id: 9,
    question: 'How does Boostifai help agencies?',
    answer:
      'Boostifai automates time-consuming SEO tasks such as keyword research, content generation, and meta tag optimization. By handling these tasks automatically, your team can focus on higher-level strategic initiatives and creative projects, enhancing overall efficiency. To discover how we can help your agency, plan a strategy call at https://www.boostifai.com/demo-strategy/',
  },
];

const BusinessTab = () => {
  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {businessFaqData.map((item) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item.id}
          value={item.id.toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={item.id.toString()}
            iconType="arrow">
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id.toString()}>
            <div className="whitespace-pre-line">{item.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BusinessTab;
