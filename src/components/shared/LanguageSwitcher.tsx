'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Remove current locale from pathname
      const pathWithoutLocale = pathname.replace(`/${locale}`, '');
      
      // Check if we're on a blog post page
      const blogPostMatch = pathWithoutLocale.match(/^\/blog\/(.+)/);
      
      if (blogPostMatch) {
        // For blog posts, redirect to blog list page in the new language
        // since posts may not exist in both languages
        router.push(`/${newLocale}/blog`);
      } else {
        // For other pages, just switch the locale
        router.push(`/${newLocale}${pathWithoutLocale}`);
      }
      
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary dark:text-accent hover:text-primary-500 dark:hover:text-primary-500 transition-colors disabled:opacity-50"
        aria-label="Switch language">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="uppercase">{locale}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-background-6 rounded-lg shadow-lg border border-stroke-3 dark:border-stroke-7 z-50">
            <button
              onClick={() => switchLocale('en')}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-background-2 dark:hover:bg-background-7 transition-colors first:rounded-t-lg ${
                locale === 'en' ? 'bg-primary-500/10 text-primary-500 font-medium' : 'text-secondary dark:text-accent'
              }`}>
              {t('english')}
            </button>
            <button
              onClick={() => switchLocale('nl')}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-background-2 dark:hover:bg-background-7 transition-colors last:rounded-b-lg ${
                locale === 'nl' ? 'bg-primary-500/10 text-primary-500 font-medium' : 'text-secondary dark:text-accent'
              }`}>
              {t('dutch')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
