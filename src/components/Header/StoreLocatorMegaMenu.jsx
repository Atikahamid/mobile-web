import React from 'react';
import './StoreLocatorMegaMenu.css';

const StoreLocatorMegaMenu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[900px] max-w-[95vw] font-sans"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Container with rounded corners (no sharp edges) and shadow */}
      <div className="store-locator-megamenu-container overflow-hidden bg-white">
        
        {/* Top Accent Bar in #FF6534 */}
        <div className="h-[3px] bg-[#FF6534] w-full"></div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 lg:p-8">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* SECTION 1: London Stores (Span 5 cols) */}
            <div className="col-span-5">
              <div className="mb-3 pb-2 border-b border-gray-100">
                <h3 className="store-locator-header-title">
                  London Stores
                </h3>
              </div>

              {/* 2 Sub-columns for London Stores */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-1">
                {/* Left London Column */}
                <div className="space-y-2.5">
                  <a href="#bond-street" className="block store-locator-megamenu-link">Bond Street Station</a>
                  <a href="#canary-wharf" className="block store-locator-megamenu-link">Canary Wharf</a>
                  <a href="#charing-cross" className="block store-locator-megamenu-link">Charing Cross</a>
                  <a href="#chiswick" className="block store-locator-megamenu-link">Chiswick</a>
                  <a href="#croydon" className="block store-locator-megamenu-link">Croydon</a>
                  <a href="#harrow" className="block store-locator-megamenu-link">Harrow</a>
                  <a href="#kensington" className="block store-locator-megamenu-link">High Street Kensington</a>
                  <a href="#kings-road" className="block store-locator-megamenu-link">Kings Road</a>
                </div>

                {/* Right London Column */}
                <div className="space-y-2.5">
                  <a href="#london-bridge" className="block store-locator-megamenu-link">London Bridge Station</a>
                  <a href="#shoreditch" className="block store-locator-megamenu-link">Shoreditch</a>
                  <a href="#st-pancras" className="block store-locator-megamenu-link">St Pancras</a>
                  <a href="#tottenham-court" className="block store-locator-megamenu-link">Tottenham Court Road</a>
                  <a href="#victoria" className="block store-locator-megamenu-link">Victoria Station</a>
                  <a href="#westfield-stratford" className="block store-locator-megamenu-link">Westfield Stratford</a>
                  <a href="#westfield-white-city" className="block store-locator-megamenu-link">Westfield White city</a>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="col-span-1 flex justify-center self-stretch">
              <div className="w-[1px] bg-gray-100 h-full"></div>
            </div>

            {/* SECTION 2: Nationwide (Span 6 cols) */}
            <div className="col-span-6">
              <div className="mb-3 pb-2 border-b border-gray-100">
                <h3 className="store-locator-header-title">
                  Nationwide
                </h3>
              </div>

              {/* 2 Sub-columns for Nationwide */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 pt-1">
                {/* Left Nationwide Column */}
                <div className="space-y-2.5">
                  <a href="#birmingham" className="block store-locator-megamenu-link">Birmingham</a>
                  <a href="#brighton" className="block store-locator-megamenu-link">Brighton - Churchill Square</a>
                  <a href="#bristol-broadmead" className="block store-locator-megamenu-link">Bristol - Broadmead</a>
                  <a href="#bristol-cribbs" className="block store-locator-megamenu-link">Bristol - Cribbs Causeway (Sky)</a>
                  <a href="#cardiff" className="block store-locator-megamenu-link">Cardiff - St David's (Sky)</a>
                  <a href="#edinburgh" className="block store-locator-megamenu-link">Edinburgh - St James Quarter (Sky)</a>
                  <a href="#lakeside" className="block store-locator-megamenu-link">Essex - Lakeside</a>
                  <a href="#gateshead" className="block store-locator-megamenu-link">Gateshead - Metro Centre (Sky)</a>
                  <a href="#glasgow" className="block store-locator-megamenu-link">Glasgow - Buchanan Street (Sky)</a>
                  <a href="#bluewater" className="block store-locator-megamenu-link">Kent - Bluewater</a>
                </div>

                {/* Right Nationwide Column */}
                <div className="space-y-2.5">
                  <a href="#kingston" className="block store-locator-megamenu-link">Kingston Upon Thames</a>
                  <a href="#liverpool" className="block store-locator-megamenu-link">Liverpool - Liverpool One (Sky)</a>
                  <a href="#leeds" className="block store-locator-megamenu-link">Leeds - Trinity Centre</a>
                  <a href="#leicester" className="block store-locator-megamenu-link">Leicester - Highcross</a>
                  <a href="#manchester" className="block store-locator-megamenu-link">Manchester - Arndale Centre</a>
                  <a href="#newcastle" className="block store-locator-megamenu-link">Newcastle - Eldon Square</a>
                  <a href="#nottingham" className="block store-locator-megamenu-link">Nottingham - Toll House Hill</a>
                  <a href="#sheffield" className="block store-locator-megamenu-link">Sheffield - Meadowhall Centre</a>
                  <a href="#surrey" className="block store-locator-megamenu-link">Surrey - Guildford</a>
                  <a href="#southampton" className="block store-locator-megamenu-link">Southampton - Cumberland House</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default StoreLocatorMegaMenu;
