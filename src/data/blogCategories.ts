export interface BlogCategory {
  label: string;
  url: string;
  wpCategory: string;
}

export const blogCategoriesEn: BlogCategory[] = [
  {
    label: "Belgian Beer",
    url: "/blog/category/belgian-beer",
    wpCategory: "Belgisch bier"
  },
  {
    label: "Belgian Chocolate",
    url: "/blog/category/belgian-chocolate",
    wpCategory: "Belgisch chocolade"
  },
  {
    label: "Fashion",
    url: "/blog/category/fashion",
    wpCategory: "Fashion"
  },
  {
    label: "SEO & Marketing",
    url: "/blog/category/seo-marketing",
    wpCategory: "SEO & Marketing"
  },
  {
    label: "Industrial",
    url: "/blog/category/industrial",
    wpCategory: "Industrial"
  }
];

export const blogCategoriesNl: BlogCategory[] = [
  {
    label: "Belgisch Bier",
    url: "/blog/category/belgian-beer",
    wpCategory: "Belgisch bier"
  },
  {
    label: "Belgische Chocolade",
    url: "/blog/category/belgian-chocolate",
    wpCategory: "Belgisch chocolade"
  },
  {
    label: "Mode",
    url: "/blog/category/fashion",
    wpCategory: "Fashion"
  },
  {
    label: "SEO & Marketing",
    url: "/blog/category/seo-marketing",
    wpCategory: "SEO & Marketing"
  },
  {
    label: "Industrieel",
    url: "/blog/category/industrial",
    wpCategory: "Industrial"
  }
];

export function getBlogCategories(locale: 'en' | 'nl'): BlogCategory[] {
  return locale === 'nl' ? blogCategoriesNl : blogCategoriesEn;
}

// Keep the default export for backward compatibility
export default blogCategoriesEn;
