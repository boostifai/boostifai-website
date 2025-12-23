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
          <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-8 md:p-12">
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

          <div className="mt-12 text-left">
            <p className="text-secondary/60 dark:text-accent/60 max-w-full mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiArticlesForm;
