import { Metadata } from 'next';

// Use environment variable for base URL, fallback to production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boostifai.com';

export function generateAlternates(locale: string, path: string = ''): Metadata['alternates'] {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return {
    canonical: `${baseUrl}/${locale}${cleanPath}`,
    languages: {
      'en': `${baseUrl}/en${cleanPath}`,
      'nl': `${baseUrl}/nl${cleanPath}`,
      'x-default': `${baseUrl}/en${cleanPath}`,
    },
  };
}
