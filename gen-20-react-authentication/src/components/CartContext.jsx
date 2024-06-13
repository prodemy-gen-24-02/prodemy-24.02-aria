import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, qt = 1) => {

    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + qt }
            : cartItem // otherwise, return the cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: qt }]); // if the item is not in the cart, add the item to the cart
    }
    console.log("ITEM ADDED");
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };


  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
  };
  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, clearCart, getCartTotal,}}
      >
      {children}
    </CartContext.Provider>
  );
}