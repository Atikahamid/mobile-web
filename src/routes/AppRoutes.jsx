import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RefurbishedDevices from '../pages/RefurbishedDevices/RefurbishedDevices';
import RefurbishedProductDetail from '../pages/RefurbishedDevices/RefurbishedProductDetail';
import CartPage from '../pages/Cart/CartPage';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import SelectDeviceType from '../pages/SelectDeviceType/SelectDeviceType';
import MobileRepairs from '../pages/MobileRepairs/MobileRepairs';
import ProtectionProduct from '../pages/ProtectionProduct/ProtectionProduct';
import AppleRepairs from '../pages/AppleRepairs/AppleRepairs';
import SamsungRepairs from '../pages/SamsungRepairs/SamsungRepairs';
import GoogleRepairs from '../pages/GoogleRepairs/GoogleRepairs';
import IPadRepairs from '../pages/IPadRepairs/IPadRepairs';
import MacbookRepairs from '../pages/MacbookRepairs/MacbookRepairs';
import SelectRepairScreen from '../pages/SelectRepairScreen/SelectRepairScreen';
import RepairBookingFlow from '../pages/RepairBooking/RepairBookingFlow';
import AboutUs from '../pages/AboutUs/AboutUs';
import OurWarranty from '../pages/OurWarranty/OurWarranty';
import TermsConditions from '../pages/TermsConditions/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';

/**
 * AppRoutes Component
 * Centralized, structured route configuration for the entire application.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Home Route */}
      <Route path="/" element={<Home />} />

      {/* Refurbished Devices Collection Route */}
      <Route path="/collections/refurbished" element={<RefurbishedDevices />} />

      {/* Product Detail Routes */}
      <Route path="/collections/refurbished/:id" element={<RefurbishedProductDetail />} />
      <Route path="/product/:id" element={<RefurbishedProductDetail />} />

      {/* Cart & Checkout Routes */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Select Device Type / Repairs Routes */}
      <Route path="/pages/repairs" element={<SelectDeviceType />} />
      <Route path="/repairs" element={<SelectDeviceType />} />
      <Route path="/select-device" element={<SelectDeviceType />} />

      {/* Mobile Repairs Routes */}
      <Route path="/pages/mobile-repairs" element={<MobileRepairs />} />
      <Route path="/mobile-repairs" element={<MobileRepairs />} />

      {/* Apple Repairs Routes */}
      <Route path="/pages/repairs/apple" element={<AppleRepairs />} />
      <Route path="/repairs/apple" element={<AppleRepairs />} />
      <Route path="/apple-repairs" element={<AppleRepairs />} />

      {/* Samsung Repairs Routes */}
      <Route path="/pages/repairs/samsung" element={<SamsungRepairs />} />
      <Route path="/repairs/samsung" element={<SamsungRepairs />} />
      <Route path="/samsung-repairs" element={<SamsungRepairs />} />

      {/* Google Repairs Routes */}
      <Route path="/pages/repairs/google" element={<GoogleRepairs />} />
      <Route path="/repairs/google" element={<GoogleRepairs />} />
      <Route path="/google-repairs" element={<GoogleRepairs />} />

      {/* iPad Repairs Routes */}
      <Route path="/pages/repairs/ipad" element={<IPadRepairs />} />
      <Route path="/repairs/ipad" element={<IPadRepairs />} />
      <Route path="/ipad-repairs" element={<IPadRepairs />} />

      {/* Macbook Repairs Routes */}
      <Route path="/pages/repairs/macbook" element={<MacbookRepairs />} />
      <Route path="/repairs/macbook" element={<MacbookRepairs />} />
      <Route path="/macbook-repairs" element={<MacbookRepairs />} />

      {/* Select Repair Routes (Model specific) */}
      <Route path="/pages/repairs/apple/:modelId" element={<SelectRepairScreen />} />
      <Route path="/pages/repairs/select-repair" element={<SelectRepairScreen />} />
      <Route path="/pages/repairs/select-repair/:modelId" element={<SelectRepairScreen />} />
      <Route path="/select-repair/:modelId" element={<SelectRepairScreen />} />
      <Route path="/select-repair" element={<SelectRepairScreen />} />

      {/* Repair Booking Workflow Routes (Visit us / Mail-in) */}
      <Route path="/book-repair" element={<RepairBookingFlow />} />
      <Route path="/repair-booking" element={<RepairBookingFlow />} />
      <Route path="/pages/repairs/book-repair" element={<RepairBookingFlow />} />

      {/* Protection Product Routes */}
      <Route path="/pages/protection-product" element={<ProtectionProduct />} />
      <Route path="/protection-product" element={<ProtectionProduct />} />
      <Route path="/protection" element={<ProtectionProduct />} />

      {/* About Us Routes */}
      <Route path="/pages/about-us" element={<AboutUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pages/about" element={<AboutUs />} />
      <Route path="/about" element={<AboutUs />} />

      {/* Our Warranty Routes */}
      <Route path="/pages/our-warranty" element={<OurWarranty />} />
      <Route path="/our-warranty" element={<OurWarranty />} />
      <Route path="/pages/warranty" element={<OurWarranty />} />
      <Route path="/warranty" element={<OurWarranty />} />

      {/* Terms & Conditions Routes */}
      <Route path="/pages/terms-conditions" element={<TermsConditions />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/terms" element={<TermsConditions />} />

      {/* Privacy Policy / Privacy Notice Routes */}
      <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/pages/privacy-notice" element={<PrivacyPolicy />} />
      <Route path="/privacy-notice" element={<PrivacyPolicy />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />

      {/* Fallback Redirect Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
