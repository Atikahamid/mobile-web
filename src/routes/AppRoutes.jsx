import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RefurbishedDevices from '../pages/RefurbishedDevices/RefurbishedDevices';
import RefurbishedProductDetail from '../pages/RefurbishedDevices/RefurbishedProductDetail';
import CartPage from '../pages/Cart/CartPage';
import SelectDeviceType from '../pages/SelectDeviceType/SelectDeviceType';

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
      <Route path="/checkout" element={<CartPage />} />

      {/* Select Device Type / Repairs Routes */}
      <Route path="/pages/repairs" element={<SelectDeviceType />} />
      <Route path="/repairs" element={<SelectDeviceType />} />
      <Route path="/select-device" element={<SelectDeviceType />} />

      {/* Fallback Redirect Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
