import React, { useState, useMemo, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RefurbishedBanner from './components/RefurbishedBanner';
import RefurbishedFilters from './components/RefurbishedFilters';
import RefurbishedCard from './components/RefurbishedCard';
import { REFURBISHED_PRODUCTS } from './data/refurbishedData';

const RefurbishedDevices = () => {
  const [selectedPrice, setSelectedPrice] = useState(600);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter handlers
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCapacity = (capacity) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  const toggleCondition = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSelectedPrice(600);
    setSelectedBrands([]);
    setSelectedCapacities([]);
    setSelectedConditions([]);
  };

  // Filtered Products Computation
  const filteredProducts = useMemo(() => {
    return REFURBISHED_PRODUCTS.filter((product) => {
      // Price Filter
      if (product.price > selectedPrice) return false;

      // Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Capacity Filter
      if (
        selectedCapacities.length > 0 &&
        !product.capacities.some((c) => selectedCapacities.includes(c))
      ) {
        return false;
      }

      // Condition Filter
      if (
        selectedConditions.length > 0 &&
        !product.conditions.some((c) => selectedConditions.includes(c))
      ) {
        return false;
      }

      return true;
    });
  }, [selectedPrice, selectedBrands, selectedCapacities, selectedConditions]);

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col font-sans text-[#1C0D2A] selection:bg-[#FF6534] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Top Banner / Hero Slider */}
      <RefurbishedBanner />

      {/* Main Content Catalog Area */}
      <main id="refurbished-catalog" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Section Heading */}
        <div id="refurbished-heading" className="text-center mb-8 scroll-mt-24">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FF6534] tracking-tight">
            Refurbished Devices
          </h1>
        </div>

        {/* Layout Grid: Left Filters, Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filters Sidebar */}
          <div className="lg:col-span-3">
            <RefurbishedFilters
              filteredCount={filteredProducts.length}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedBrands={selectedBrands}
              toggleBrand={toggleBrand}
              selectedCapacities={selectedCapacities}
              toggleCapacity={toggleCapacity}
              selectedConditions={selectedConditions}
              toggleCondition={toggleCondition}
              clearFilters={clearFilters}
            />
          </div>

          {/* Right Column: Product Cards Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <RefurbishedCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xs border border-gray-100 my-4">
                <p className="text-lg font-bold text-gray-700">No products match your selected filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-[#FF6534] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#e05020] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default RefurbishedDevices;
