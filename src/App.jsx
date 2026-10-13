import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/Auth/AuthModal';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
          <AuthModal />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

