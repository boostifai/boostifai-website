import { MetadataRoute } from 'next';
import getMarkDownData from '@/utils/getMarkDownData';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://boostifai.com';
  const locales = ['en', 'nl'] as const;

  // Static routes that exist in both languages
  const staticRoutes = [
    '',
    '/about',
    '/our-process',
    '/business-pricing',
    '/agency-pricing',
    '/blog',
    '/book-meeting',
    '/contact-us',
    '/faq',
    '/ebooks',
    '/affiliates',
    '/newsletter',
    '/tour',
    '/tutorials',
    '/ai-articles',
    '/ai-recommendation',
    '/rank-analyzer',
    '/case-study',
    '/privacy',
    '/terms-conditions',
  ];

  // Generate sitemap entries for static routes with alternates
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/en${route}`,
          en: `${baseUrl}/en${route}`,
          nl: `${baseUrl}/nl${route}`,
        },
      },
    }))
  );

  // Get all blog posts
  const blogsFolder = path.join(process.cwd(), 'src/data/blogs');
  const blogs = getMarkDownData(blogsFolder, true, 'date');

  // Generate sitemap entries for blog posts with alternates
  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    blogs.map((blog) => ({
      url: `${baseUrl}/${locale}/blog/${blog.slug}`,
      lastModified: blog.date ? new Date(blog.date) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/en/blog/${blog.slug}`,
          en: `${baseUrl}/en/blog/${blog.slug}`,
          nl: `${baseUrl}/nl/blog/${blog.slug}`,
        },
      },
    }))
  );

  // Get case studies
  const caseStudiesFolder = path.join(process.cwd(), 'src/data/case-study');
  const caseStudies = getMarkDownData(caseStudiesFolder, true, 'date');

  // Generate sitemap entries for case studies with alternates
  const caseStudyEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/${locale}/case-studies/${caseStudy.slug}`,
      lastModified: caseStudy.date ? new Date(caseStudy.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/en/case-studies/${caseStudy.slug}`,
          en: `${baseUrl}/en/case-studies/${caseStudy.slug}`,
          nl: `${baseUrl}/nl/case-studies/${caseStudy.slug}`,
        },
      },
    }))
  );

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
