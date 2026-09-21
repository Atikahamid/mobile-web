import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ismash_cart_items');
      return saved ? JSON.parse(saved) : [
        // Pre-populate with default product matching picture for instant demo if empty
        {
          id: 'iphone-13-blue-128GB-Fair+',
          productId: 'iphone-13',
          name: 'iPhone 13',
          color: { name: 'Blue', hex: '#2D5C7F', phoneBg: '#255273', screenGradient: 'from-blue-900 via-teal-800 to-indigo-950' },
          capacity: '128GB',
          condition: { condition: 'Fair+', price: 249 },
          unitPrice: 249,
          quantity: 2,
        }
      ];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ismash_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemKey = `${newItem.productId}-${newItem.color.name}-${newItem.capacity}-${newItem.condition.condition}`;
      const existingIndex = prevItems.findIndex((item) => item.id === itemKey);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (newItem.quantity || 1),
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            ...newItem,
            id: itemKey,
            quantity: newItem.quantity || 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const qty = parseInt(newQuantity, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
