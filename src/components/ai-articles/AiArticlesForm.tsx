'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const AiArticlesForm = () => {
  const t = useTranslations('AiArticlesPage.form');
  const params = useParams();
  const locale = params?.locale as 'en' | 'nl';

  // Form ID based on language
  const formId = locale === 'en' ? '29' : '30';

  return (
    <section className="pb-16 md:pb-20 lg:pb-[100px]">
      <div className="main-container">
        <div className="max-w-[700px] mx-auto">
          <div className="relative bg-secondary dark:bg-background-6 rounded-[20px] p-8 md:p-12">
            {/* Free Article Stamp */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-white dark:bg-background-7 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-green-600 dark:text-green-400 font-bold text-sm md:text-base leading-tight">
                      {t('stampFree')}
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-bold text-xs md:text-sm leading-tight">
                      {t('stampArticle')}
                    </div>
                  </div>
                </div>
                {/* Decorative stars */}
                <svg className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="absolute -bottom-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.5s' }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <form
              method="POST"
              action="https://boostifai.activehosted.com/proc.php"
              id={`_form_${formId}_`}
              className={`_form _form_${formId} _inline-form _inline-style _dark space-y-4`}
              noValidate
              data-styles-version="5">
              <input type="hidden" name="u" value={formId} />
              <input type="hidden" name="f" value={formId} />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input type="hidden" name="or" value="fe0ef2e1174c5e410f5e289dd4493fe8" />

              <div>
                <input
                  type="text"
                  id="field[4]"
                  name="field[4]"
                  placeholder={t('keywordPlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="field[2]"
                  name="field[2]"
                  placeholder={t('urlPlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('emailPlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                id={`_form_${formId}_submit`}
                type="submit"
                className="w-full btn btn-primary hover:btn-accent btn-md">
                {t('submitButton')}
              </button>

              {/* <div className="text-center text-sm text-white/60 dark:text-accent/60">
                {t('linkText')}{' '}
                <a
                  href={t('linkUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:no-underline">
                  {t('linkCta')}
                </a>
              </div> */}

              <div className="_form-thank-you" style={{ display: 'none' }}></div>
            </form>
          </div>

          {/* <div className="mt-12 text-left">
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-full mx-auto">
              {t('description')}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AiArticlesForm;
