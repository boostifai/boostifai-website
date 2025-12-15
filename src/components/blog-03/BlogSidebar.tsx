'use client';

import { IBlogPost } from '@/interface';
import { WPCategory } from '@/types/wordpress';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Categories from './Categories';
import RecentBlogs from './RecentBlogs';
import SearchBar from './SearchBar';

interface BlogSidebarProps {
  wpCategories: WPCategory[];
  recentBlogs: IBlogPost[];
  selectedCategory?: string;
}

const BlogSidebar = ({ wpCategories, recentBlogs, selectedCategory = 'all' }: BlogSidebarProps) => {
  const router = useRouter();

  const handleSearch = (query: string) => {
    // Navigate to blog homepage with search query
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/blog');
    }
  };

  const handleCategoryChange = (categoryName: string) => {
    // Navigate to category page instead of using query params
    if (categoryName === 'all') {
      router.push('/blog');
    } else {
      // Find the category URL from JSON
      const category = wpCategories.find((cat) => cat.name === categoryName);
      if (category) {
        router.push(`/blog/category/${category.slug}`);
      }
    }
  };

  const categories = wpCategories.map((cat) => ({
    name: cat.name,
    count: cat.count,
  }));

  return (
    <div className="max-md:col-span-full max-lg:col-span-5 lg:col-span-4 max-md:order-1 bg-background-2 dark:bg-background-6 rounded-[20px] shadow-1 self-start space-y-[52px] max-w-full md:max-w-[410px] px-8 py-[44px]">
      <SearchBar onSearch={handleSearch} />

      <Categories categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />

      <RecentBlogs blogs={recentBlogs} />

      {/* Advertisement */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/images/blogs/black-friday-5.png"
          alt="Advertisement"
          width={410}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BlogSidebar;
