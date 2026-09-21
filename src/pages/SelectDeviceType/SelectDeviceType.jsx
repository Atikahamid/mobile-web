import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutSection from '../../components/AboutSection/AboutSection';
import phoneImg from '../../assets/images/phone.png';
import tabletsImg from '../../assets/images/tablets.png';
import laptopsImg from '../../assets/images/laptops.png';

const SelectDeviceType = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const deviceTypes = [
    {
      id: 'smartphones',
      title: 'Smartphone Repairs',
      image: phoneImg,
      description: 'Book Samsung repairs, iPhone repairs, Google and more with our iSmash smartphone repair services.',
      badge: 'Most Popular',
      price: 'From £29',
      buttonText: 'Book Smartphone Repair',
      href: '#smartphone-repairs',
    },
    {
      id: 'ipad',
      title: 'iPad Repairs',
      image: tabletsImg,
      description: 'iSmash are the experts for all iPad repairs from cracked screens to water damage and battery replacement.',
      badge: 'Same Day Repair',
      price: 'From £49',
      buttonText: 'Book iPad Repair',
      href: '#ipad-repairs',
    },
    {
      id: 'macbook',
      title: 'Macbook Repairs',
      image: laptopsImg,
      description: 'iSmash have a large collection of dedicated repair centres for Macbooks, laptops and other computer devices',
      badge: 'Express Service',
      price: 'From £69',
      buttonText: 'Book Macbook Repair',
      href: '#macbook-repairs',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1C0D2A] selection:bg-[#FF6534] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF6534] text-center mb-12 sm:mb-16 tracking-tight">
          Select Your Device Type
        </h1>

        {/* Device Types Cards Grid (Using DevicesBrands UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {deviceTypes.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Banner Image Container */}
              <div className="bg-gradient-to-b from-[#FAF8F9] to-[#F3F4F8] p-6 flex justify-center items-center relative h-[220px] sm:h-[240px] overflow-hidden">
                {/* Badge Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1F1B2E] font-bold text-xs px-3.5 py-1.5 rounded-full border border-gray-200/70 shadow-sm z-10">
                  {device.badge}
                </span>

                {/* Device Image */}
                <img
                  src={device.image}
                  alt={`${device.title}`}
                  className="max-h-[170px] max-w-[85%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between text-center sm:text-left">
                <div>
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF6534] mb-3 tracking-tight">
                    {device.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6E6B7B] text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {device.description}
                  </p>
                </div>

                {/* Action Button */}
                <div>
                  <a
                    href={device.href}
                    className="w-full py-3.5 rounded-xl bg-white border-2 border-[#FF6534] text-[#FF6534] font-bold text-sm sm:text-base hover:bg-[#FF6534] hover:text-white transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{device.buttonText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Separator Line below device cards */}
        <div className="w-full h-[2px] bg-slate-300/80 my-8"></div>

        {/* About Section Component */}
        <AboutSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SelectDeviceType;
