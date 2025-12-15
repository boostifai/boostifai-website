import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boostifai-blogs.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'boostifai.ams3.cdn.digitaloceanspaces.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'contenu.nyc3.digitaloceanspaces.com',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
};

export default withNextIntl(nextConfig);
