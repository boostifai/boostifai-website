'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const ShareLink = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    // Set the URL only on the client side after mount
    setCurrentUrl(window.location.href);
  }, []);
  
  // Encode URL for sharing
  const encodedUrl = encodeURIComponent(currentUrl);
  
  const handleShare = () => (e: React.MouseEvent) => {
    if (!currentUrl) {
      e.preventDefault();
      return;
    }
  };
  
  return (
    <RevealAnimation delay={0.2}>
      <div className="space-y-4 max-w-[950px] mx-auto mt-[70px]">
        <h5 className="text-heading-6">Share this post</h5>
        <ul className="flex items-center gap-2.5">
          {/* Facebook */}
          <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
            <Link 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleShare()}>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
          
          {/* X (Twitter) */}
          <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
            <Link 
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleShare()}>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M11.9027 8.46899L18.3482 1H16.8648L11.1194 7.3532L6.5578 1H1L7.7508 11.1193L1 18.9403H2.48338L8.53315 12.2348L13.3422 18.9403H18.9L11.9023 8.46899H11.9027ZM9.31947 11.3084L8.58023 10.2659L3.07938 2.21472H5.76905L10.2477 8.75722L10.9869 9.79969L16.8656 17.7701H14.1759L9.31947 11.3088V11.3084Z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
          
          {/* LinkedIn */}
          <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
            <Link 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleShare()}>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M10.0007 1C6.35854 1 3.07729 3.19375 1.6851 6.55469C0.292911 9.91562 1.06166 13.7875 3.6351 16.3609C6.20854 18.9344 10.0804 19.7031 13.4413 18.3109C16.807 16.9234 19.0007 13.6422 19.0007 10C19.0007 5.03125 14.9695 1 10.0007 1ZM7.3851 14.7391H5.42104V8.41094H7.3851V14.7391ZM6.40072 7.54844C5.93666 7.54844 5.51947 7.27187 5.34135 6.84531C5.16322 6.41875 5.25697 5.92656 5.5851 5.59844C5.90854 5.27031 6.40072 5.17188 6.82729 5.34531C7.25385 5.51875 7.5351 5.93594 7.53979 6.39531C7.53979 7.03281 7.03354 7.54375 6.40072 7.54844ZM14.7398 14.7391H12.7757V11.6594C12.7757 10.9234 12.7617 9.98594 11.7538 9.98594C10.746 9.98594 10.5679 10.7828 10.5679 11.6078V14.7391H8.61322V8.41094H10.4976V9.27344H10.5257C10.7882 8.77656 11.4257 8.25156 12.382 8.25156C14.3695 8.25156 14.7351 9.55937 14.7351 11.2609V14.7391H14.7398Z"
                  className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </RevealAnimation>
  );
};

export default ShareLink;
