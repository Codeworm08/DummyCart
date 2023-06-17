import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    if (!cart[product.id]) {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: product,
      }));
    }
  };
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;