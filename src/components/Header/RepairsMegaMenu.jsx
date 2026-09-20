import React from 'react';
import './RepairsMegaMenu.css';

const RepairsMegaMenu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[1040px] max-w-[95vw] font-sans"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Container with rounded corners (no sharp edges) and shadow */}
      <div className="repairs-megamenu-container overflow-hidden bg-white">
        
        {/* Top Accent Bar in #FF6534 */}
        <div className="h-[3px] bg-[#FF6534] w-full"></div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 lg:p-8">
          <div className="grid grid-cols-12 gap-6 items-start">

            {/* COLUMN 1: Smartphones (Span 7 out of 12 cols) */}
            <div className="col-span-7">
              {/* Header Title with Phone Icon */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                {/* Phone SVG Icon */}
                <svg className="w-5 h-5 text-[#FF6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2.2" />
                  <line x1="11" y1="18" x2="13" y2="18" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <h3 className="repairs-megamenu-header-title">
                  Smartphones
                </h3>
              </div>

              {/* 3 Sub-Columns: iPhone (2 sub-cols), Samsung (1 sub-col), Google (1 sub-col) */}
              <div className="grid grid-cols-12 gap-4 pt-1">
                
                {/* iPhone Sub-column (Span 6 out of 12 sub-cols) */}
                <div className="col-span-6">
                  <h4 className="repairs-megamenu-sub-header mb-3">
                    iPhone
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {/* Left iPhone Column */}
                    <div className="space-y-2">
                      <a href="#iphone-17-pro-max" className="block repairs-megamenu-link">iPhone 17 Pro Max</a>
                      <a href="#iphone-17-pro" className="block repairs-megamenu-link">iPhone 17 Pro</a>
                      <a href="#iphone-17" className="block repairs-megamenu-link">iPhone 17</a>
                      <a href="#iphone-15-pro-max" className="block repairs-megamenu-link">iPhone 15 Pro Max</a>
                      <a href="#iphone-15" className="block repairs-megamenu-link">iPhone 15</a>
                      <a href="#iphone-13" className="block repairs-megamenu-link">iPhone 13</a>
                      <a href="#iphone-11" className="block repairs-megamenu-link">iPhone 11</a>
                      <a href="#iphone-se" className="block repairs-megamenu-link">iPhone SE</a>
                    </div>
                    {/* Right iPhone Column */}
                    <div className="space-y-2">
                      <a href="#iphone-16-pro-max" className="block repairs-megamenu-link">iPhone 16 Pro Max</a>
                      <a href="#iphone-16-pro" className="block repairs-megamenu-link">iPhone 16 Pro</a>
                      <a href="#iphone-16" className="block repairs-megamenu-link">iPhone 16</a>
                      <a href="#iphone-15-pro" className="block repairs-megamenu-link">iPhone 15 Pro</a>
                      <a href="#iphone-14" className="block repairs-megamenu-link">iPhone 14</a>
                      <a href="#iphone-12" className="block repairs-megamenu-link">iPhone 12</a>
                      <a href="#iphone-xr" className="block repairs-megamenu-link">iPhone XR</a>
                      <a href="#see-all-iphone" className="block repairs-megamenu-link text-[#FF6534] font-bold">See All iPhone</a>
                    </div>
                  </div>
                </div>

                {/* Samsung Sub-column (Span 3 out of 12 sub-cols) */}
                <div className="col-span-3">
                  <h4 className="repairs-megamenu-sub-header mb-3">
                    Samsung
                  </h4>
                  <div className="space-y-2">
                    <a href="#galaxy-z-flip5" className="block repairs-megamenu-link">Galaxy Z Flip5</a>
                    <a href="#galaxy-z-flip4" className="block repairs-megamenu-link">Galaxy Z Flip4</a>
                    <a href="#galaxy-s24-ultra" className="block repairs-megamenu-link">Galaxy S24 Ultra</a>
                    <a href="#galaxy-s23-ultra" className="block repairs-megamenu-link">Galaxy S23 Ultra</a>
                    <a href="#galaxy-s22-ultra" className="block repairs-megamenu-link">Galaxy S22 Ultra</a>
                    <a href="#galaxy-s21-ultra" className="block repairs-megamenu-link">Galaxy S21 Ultra</a>
                    <a href="#galaxy-a54" className="block repairs-megamenu-link">Galaxy A54</a>
                    <a href="#galaxy-a52s" className="block repairs-megamenu-link">Galaxy A52s</a>
                    <a href="#see-all-samsung" className="block repairs-megamenu-link text-[#FF6534] font-bold">See All Samsung</a>
                  </div>
                </div>

                {/* Google Sub-column (Span 3 out of 12 sub-cols) */}
                <div className="col-span-3">
                  <h4 className="repairs-megamenu-sub-header mb-3">
                    Google
                  </h4>
                  <div className="space-y-2">
                    <a href="#pixel-11-pro-xl" className="block repairs-megamenu-link">Pixel 11 Pro XL</a>
                    <a href="#pixel-11-pro" className="block repairs-megamenu-link">Pixel 11 Pro</a>
                    <a href="#pixel-11" className="block repairs-megamenu-link">Pixel 11</a>
                    <a href="#pixel-10-pro-xl" className="block repairs-megamenu-link">Pixel 10 Pro XL</a>
                    <a href="#pixel-10-pro" className="block repairs-megamenu-link">Pixel 10 Pro</a>
                    <a href="#pixel-10" className="block repairs-megamenu-link">Pixel 10</a>
                    <a href="#pixel-9" className="block repairs-megamenu-link">Pixel 9</a>
                    <a href="#pixel-9a" className="block repairs-megamenu-link">Pixel 9a</a>
                    <a href="#pixel-8" className="block repairs-megamenu-link">Pixel 8</a>
                    <a href="#pixel-7" className="block repairs-megamenu-link">Pixel 7</a>
                    <a href="#see-all-google" className="block repairs-megamenu-link text-[#FF6534] font-bold">See All Google</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="col-span-1 flex justify-center self-stretch">
              <div className="w-[1px] bg-gray-100 h-full"></div>
            </div>

            {/* COLUMN 2: iPad (Span 2 out of 12 cols) */}
            <div className="col-span-2">
              <div className="mb-3 pb-2 border-b border-gray-100">
                <h3 className="repairs-megamenu-header-title">
                  iPad
                </h3>
              </div>
              <div className="space-y-2 pt-1">
                <a href="#ipad-11th-gen" className="block repairs-megamenu-link">iPad 11th Gen</a>
                <a href="#ipad-10th-gen" className="block repairs-megamenu-link">iPad 10th Gen</a>
                <a href="#ipad-9th-gen" className="block repairs-megamenu-link">iPad 9th Gen</a>
                <a href="#ipad-8th-gen" className="block repairs-megamenu-link">iPad 8th Gen</a>
                <a href="#ipad-mini-7th-gen" className="block repairs-megamenu-link">iPad Mini 8.3" 7th Gen</a>
                <a href="#ipad-air-4-5th-gen" className="block repairs-megamenu-link">iPad Air 10.9" 4th / 5th Gen</a>
                <a href="#ipad-air-6-7th-gen" className="block repairs-megamenu-link">iPad Air 11" 6th / 7th Gen</a>
                <a href="#ipad-pro-1-2nd-gen" className="block repairs-megamenu-link">iPad Pro 11" 1st / 2nd Gen</a>
                <a href="#ipad-pro-3-4th-gen" className="block repairs-megamenu-link">iPad Pro 12.9" 3rd / 4th Gen</a>
                <a href="#ipad-pro-5-6th-gen" className="block repairs-megamenu-link">iPad Pro 12.9" 5th / 6th Gen</a>
                <a href="#see-all-ipad" className="block repairs-megamenu-link text-[#FF6534] font-bold pt-1">See all iPad</a>
              </div>
            </div>

            {/* COLUMN 3: Other Repairs & Categories (Span 2 out of 12 cols) */}
            <div className="col-span-2">
              {/* Top Block: Other Repairs */}
              <div>
                <div className="mb-3 pb-2 border-b border-gray-100">
                  <h3 className="repairs-megamenu-header-title">
                    Other Repairs
                  </h3>
                </div>
                <div className="space-y-2 pt-1">
                  <a href="#macbook-batteries" className="block repairs-megamenu-link">Macbook Batteries</a>
                  <a href="#something-else" className="block repairs-megamenu-link">Something else</a>
                </div>
              </div>

              {/* Bottom Block: Categories */}
              <div className="mt-7">
                <div className="mb-3 pb-2 border-b border-gray-100">
                  <h3 className="repairs-megamenu-header-title">
                    Categories
                  </h3>
                </div>
                <div className="space-y-2 pt-1">
                  <a href="#screen-replacements" className="block repairs-megamenu-link">Screen Replacements</a>
                  <a href="#battery-replacements" className="block repairs-megamenu-link">Battery Replacements</a>
                  <a href="#iphone-water-damage" className="block repairs-megamenu-link">iPhone Water Damage</a>
                  <a href="#devices-we-dont-repair" className="block repairs-megamenu-link">Devices we don't repair</a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RepairsMegaMenu;
