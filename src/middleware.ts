import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Auto-detect user's locale
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames, exclude API routes
  matcher: ['/', '/(nl|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
