import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import RepairsMegaMenu from './RepairsMegaMenu';
import StoreLocatorMegaMenu from './StoreLocatorMegaMenu';
import AboutUsDropdown from './AboutUsDropdown';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRepairsHovered, setIsRepairsHovered] = useState(false);
  const [isStoreLocatorHovered, setIsStoreLocatorHovered] = useState(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);

  const navLinks = [
    { title: 'Repairs & Servicing', href: '#repairs' },
    { title: 'Store Locator', href: '#stores' },
    { title: 'Refurbished Devices', href: '#devices' },
    { title: 'About Us', href: '#about' },
    { title: 'Join Our Team', href: '#careers' },
  ];

  return (
    <header className="ismash-header sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/" className="flex items-center gap-2.5 group">
              {/* iSmash Stylized Diamond X Icon */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 transform rotate-45 group-hover:scale-105 transition-transform duration-200">
                  <div className="w-3 h-3 bg-[#FF6534] rounded-xs shadow-xs"></div>
                  <div className="w-3 h-3 bg-[#FF6534] rounded-xs shadow-xs"></div>
                  <div className="w-3 h-3 bg-[#FF6534] rounded-xs shadow-xs"></div>
                  <div className="w-3 h-3 bg-[#FF6534] rounded-xs shadow-xs"></div>
                </div>
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-[#282338]">
                i<span className="font-extrabold">Smash</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-[15px]">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.title}>
                {link.title === 'Repairs & Servicing' ? (
                  <div
                    className="py-6 cursor-pointer"
                    onMouseEnter={() => {
                      setIsRepairsHovered(true);
                      setIsStoreLocatorHovered(false);
                      setIsAboutUsHovered(false);
                    }}
                    onMouseLeave={() => setIsRepairsHovered(false)}
                  >
                    <a
                      href={link.href}
                      className={`px-3 py-2 transition-colors duration-150 tracking-tight ${
                        isRepairsHovered ? 'text-[#FF6534]' : 'text-[#282338] hover:text-[#FF6534]'
                      }`}
                    >
                      {link.title}
                    </a>
                  </div>
                ) : link.title === 'Store Locator' ? (
                  <div
                    className="py-6 cursor-pointer"
                    onMouseEnter={() => {
                      setIsStoreLocatorHovered(true);
                      setIsRepairsHovered(false);
                      setIsAboutUsHovered(false);
                    }}
                    onMouseLeave={() => setIsStoreLocatorHovered(false)}
                  >
                    <a
                      href={link.href}
                      className={`px-3 py-2 transition-colors duration-150 tracking-tight ${
                        isStoreLocatorHovered ? 'text-[#FF6534]' : 'text-[#282338] hover:text-[#FF6534]'
                      }`}
                    >
                      {link.title}
                    </a>
                  </div>
                ) : link.title === 'About Us' ? (
                  <div
                    className="relative py-6 cursor-pointer"
                    onMouseEnter={() => {
                      setIsAboutUsHovered(true);
                      setIsRepairsHovered(false);
                      setIsStoreLocatorHovered(false);
                    }}
                    onMouseLeave={() => setIsAboutUsHovered(false)}
                  >
                    <a
                      href={link.href}
                      className={`px-3 py-2 transition-colors duration-150 tracking-tight ${
                        isAboutUsHovered ? 'text-[#FF6534]' : 'text-[#282338] hover:text-[#FF6534]'
                      }`}
                    >
                      {link.title}
                    </a>

                    {/* About Us Dropdown Floating directly under About Us link */}
                    {isAboutUsHovered && (
                      <AboutUsDropdown
                        onMouseEnter={() => setIsAboutUsHovered(true)}
                        onMouseLeave={() => setIsAboutUsHovered(false)}
                      />
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-[#282338] hover:text-[#FF6534] px-3 py-2 transition-colors duration-150 tracking-tight"
                  >
                    {link.title}
                  </a>
                )}
                {index < navLinks.length - 1 && (
                  <span className="text-[#f2a1b7] font-light select-none px-1">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right Action Icons (Search, Cart, User) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Input Box */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-56 pl-4 pr-9 py-1.5 text-sm rounded-full border border-gray-300 focus:outline-none focus:border-[#FF6534] focus:ring-1 focus:ring-[#FF6534] text-gray-700 placeholder-gray-500 transition-all duration-200 bg-white"
              />
              <button 
                type="button"
                className="absolute right-3 text-[#FF6534] hover:scale-110 transition-transform duration-150"
                aria-label="Search"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Shopping Cart Icon */}
            <a
              href="#cart"
              className="relative p-2 text-[#282338] hover:text-[#FF6534] transition-colors duration-150 flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
              <span className="absolute -top-0.5 -right-0.5 bg-[#FF6534] text-white text-[11px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                0
              </span>
            </a>

            {/* User Account Icon */}
            <a
              href="#account"
              className="p-1.5 text-[#282338] hover:text-[#FF6534] border border-gray-300 rounded-full transition-all duration-150 flex items-center justify-center hover:border-[#FF6534]"
              aria-label="User Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="#cart"
              className="relative p-1.5 text-[#282338]"
              aria-label="Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-[#FF6534] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#282338] hover:text-[#FF6534] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Repairs & Servicing Dropdown Floating Centered */}
        {isRepairsHovered && (
          <RepairsMegaMenu
            onMouseEnter={() => setIsRepairsHovered(true)}
            onMouseLeave={() => setIsRepairsHovered(false)}
          />
        )}

        {/* Store Locator Dropdown Floating Centered */}
        {isStoreLocatorHovered && (
          <StoreLocatorMegaMenu
            onMouseEnter={() => setIsStoreLocatorHovered(true)}
            onMouseLeave={() => setIsStoreLocatorHovered(false)}
          />
        )}

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:border-[#FF6534]"
            />
            <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-[#FF6534]" />
          </div>
          <nav className="flex flex-col space-y-2 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-[#282338] hover:text-[#FF6534] py-2 border-b border-gray-50 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="#account"
              className="flex items-center gap-2 text-[#282338] font-semibold text-sm hover:text-[#FF6534]"
            >
              <div className="p-1.5 border border-gray-300 rounded-full">
                <User className="w-4 h-4" />
              </div>
              My Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
