import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boostifai.com';
const siteName = 'Boostifai';
const defaultImage = `${baseUrl}/images/og-image.png`; // You'll need to create this

interface GenerateMetadataParams {
  locale: string;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

export function generatePageMetadata({
  locale,
  path = '',
  title,
  description,
  image = defaultImage,
  type = 'website',
}: GenerateMetadataParams): Metadata {
  // Remove leading and trailing slashes
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const fullPath = cleanPath ? `/${cleanPath}` : '';
  const url = `${baseUrl}/${locale}${fullPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en${fullPath}`,
        'nl': `${baseUrl}/nl${fullPath}`,
        'x-default': `${baseUrl}/en${fullPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@boostifai',
      site: '@boostifai',
    },
  };
}
