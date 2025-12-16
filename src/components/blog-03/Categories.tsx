'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface Category {
  name: string;
  count: number;
}

interface CategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Categories = ({ categories, selectedCategory, onCategoryChange }: CategoriesProps) => {
  const t = useTranslations('BlogPage.categories');
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setLoadingCategory(categoryName);
    onCategoryChange(categoryName);
  };

  return (
    <div>
      <h3 className="text-heading-5">{t('title')}</h3>
      <div className="space-y-2 mt-2.5">
        <button
          onClick={() => handleCategoryClick('all')}
          disabled={loadingCategory !== null}
          className={`py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 flex items-center justify-between ${
            selectedCategory === 'all' ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
          } disabled:opacity-50`}>
          <span>{t('all')}</span>
          {loadingCategory === 'all' && (
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            disabled={loadingCategory !== null}
            className={`py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 flex items-center justify-between ${
              selectedCategory === category.name ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
            } disabled:opacity-50`}>
            <span className="first-letter:uppercase">{category.name}</span>
            {loadingCategory === category.name && (
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
Categories.displayName = 'Categories';
export default Categories;
