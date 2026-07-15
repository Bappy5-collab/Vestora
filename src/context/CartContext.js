"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

// Same product in a different colour or size is a separate line in the cart.
const makeKey = (id, color, size) => `${id}|${color}|${size}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, { color, size, quantity = 1 }) => {
    const key = makeKey(product.id, color, size);

    setItems((current) => {
      const existing = current.find((item) => item.key === key);

      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...current,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          color,
          size,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (key) => {
    setItems((current) => current.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, quantity) => {
    const next = Math.max(1, quantity);
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity: next } : item))
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
