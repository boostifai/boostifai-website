import { Metadata } from 'next';

// Use environment variable for base URL, fallback to production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boostifai.com';

export function generateAlternates(locale: string, path: string = ''): Metadata['alternates'] {
  // Remove leading and trailing slashes
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const fullPath = cleanPath ? `/${cleanPath}` : '';
  
  return {
    canonical: `${baseUrl}/${locale}${fullPath}`,
    languages: {
      'en': `${baseUrl}/en${fullPath}`,
      'nl': `${baseUrl}/nl${fullPath}`,
      'x-default': `${baseUrl}/en${fullPath}`,
    },
  };
}
