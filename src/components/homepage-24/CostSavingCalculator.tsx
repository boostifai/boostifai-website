'use client';

import { FC, useState } from 'react';

const CostSavingCalculator: FC = () => {
  const [sites, setSites] = useState(1);
  const [pagesPerSite, setPagesPerSite] = useState(10);

  // Constants
  const RECOMMENDATIONS_PER_PAGE = 50;
  const OPTIMIZATIONS_PER_HOUR = 12;
  const HOURLY_RATE = 20;

  // Calculate total savings
  const totalRecommendations = sites * pagesPerSite * RECOMMENDATIONS_PER_PAGE;
  const totalHours = totalRecommendations / OPTIMIZATIONS_PER_HOUR;
  const totalSavings = Math.round(totalHours * HOURLY_RATE);

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 backdrop-blur-sm md:p-10 lg:p-12">
        {/* <h3 className="mb-8 text-center text-2xl font-bold text-accent md:text-3xl lg:text-4xl">
          Cost Saving Calculator
        </h3> */}

        <div className="space-y-8">
          {/* Number of Sites Slider */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="sites-slider" className="text-base font-medium text-accent md:text-lg">
                Number of Sites
              </label>
              <span className="text-lg font-bold text-accent md:text-xl">{sites} Sites</span>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 h-2 rounded-lg bg-accent/20" />
              <input
                id="sites-slider"
                type="range"
                min="1"
                max="100"
                value={sites}
                onChange={(e) => setSites(Number(e.target.value))}
                className="relative h-2 w-full cursor-pointer appearance-none rounded-lg bg-transparent [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent)) 0%, rgb(var(--accent)) ${sites}%, transparent ${sites}%, transparent 100%)`,
                }}
              />
            </div>
          </div>

          {/* Number of Pages per Site Slider */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="pages-slider" className="text-base font-medium text-accent md:text-lg">
                Number of Pages per Site
              </label>
              <span className="text-lg font-bold text-accent md:text-xl">{pagesPerSite} Pages</span>
            </div>
            <div className="relative flex items-center">
              <div className="absolute inset-0 h-2 rounded-lg bg-accent/20" />
              <input
                id="pages-slider"
                type="range"
                min="1"
                max="1000"
                value={pagesPerSite}
                onChange={(e) => setPagesPerSite(Number(e.target.value))}
                className="relative h-2 w-full cursor-pointer appearance-none rounded-lg bg-transparent [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent)) 0%, rgb(var(--accent)) ${(pagesPerSite / 1000) * 100}%, transparent ${(pagesPerSite / 1000) * 100}%, transparent 100%)`,
                }}
              />
            </div>
          </div>

          {/* Total Savings Display */}
          <div className="mt-10 rounded-2xl bg-white p-6 text-center md:p-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#252525]">Total Savings</p>
            <p className="text-4xl text-[#252525] font-bold md:text-5xl lg:text-6xl">
              ${totalSavings.toLocaleString()}
            </p>
          </div>

          {/* Assumptions */}
          <div className="mt-8 space-y-2 border-t border-accent/20 pt-6 text-sm">
            <p className='text-white'>Every page has an average of {RECOMMENDATIONS_PER_PAGE} recommendations.</p>
            <p className='text-white'>An SEO Expert completes {OPTIMIZATIONS_PER_HOUR} optimizations per hour.</p>
            <p className='text-white'>An SEO Expert charges ${HOURLY_RATE} per hour.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSavingCalculator;
