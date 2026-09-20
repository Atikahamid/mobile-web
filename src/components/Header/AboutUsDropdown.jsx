import React from 'react';
import './AboutUsDropdown.css';

const AboutUsDropdown = ({ onMouseEnter, onMouseLeave }) => {
  const links = [
    { title: 'Our Warranty', href: '#our-warranty' },
    { title: 'Split Your Payment in 3', href: '#split-payment' },
    { title: 'About iSmash', href: '#about-ismash' },
    { title: 'News', href: '#news' },
    { title: 'Blog', href: '#blog' },
    { title: 'Terms & Conditions', href: '#terms-conditions' },
    { title: 'Our Privacy Policy', href: '#privacy-policy' },
    { title: 'iSmash Offers & Deals', href: '#offers-deals' },
    { title: 'Student Discount', href: '#student-discount' },
    { title: 'Environment', href: '#environment' },
    { title: 'FAQ & Contact Us', href: '#faq-contact' },
    { title: 'Business Customers', href: '#business-customers' },
  ];

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[250px] font-sans"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Container with rounded corners (no sharp edges) and shadow */}
      <div className="about-us-dropdown-container overflow-hidden bg-white">
        
        {/* Top Accent Bar in #FF6534 */}
        <div className="h-[3px] bg-[#FF6534] w-full"></div>

        {/* Links List */}
        <div className="py-1 divide-y divide-gray-100">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="about-us-dropdown-link"
            >
              {link.title}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutUsDropdown;
