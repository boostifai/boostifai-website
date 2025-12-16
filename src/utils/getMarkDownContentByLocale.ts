import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getMarkDownContentByLocale = (folder: string, slug: string, locale: string) => {
  // Try locale-specific file first
  const localeFile = path.join(folder, locale, `${slug}.md`);
  const defaultFile = path.join(folder, `${slug}.md`);
  
  const file = fs.existsSync(localeFile) ? localeFile : defaultFile;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkDownContentByLocale;
