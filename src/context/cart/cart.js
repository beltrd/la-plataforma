// @ts-nocheck
"use client";

import React, { useContext, createContext, useReducer, useEffect } from "react";

import toast from "react-hot-toast";

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((product) => product.id !== action.item.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    const alreadyInCart = cartItems.find((product) => product.id === item.id);

    if (alreadyInCart) {
      toast("Item Already In Cart", { icon: "🛒" });
      return;
    }

    toast("Added To Cart", { icon: "🛒" });

    dispatch({ type: "ADD_ITEM", item });
  };

  const deleteFromCart = (item) => {
    toast("Removed From Cart", { icon: "🛒" });

    dispatch({ type: "REMOVE_ITEM", item });
  };

  const deleteAllFromCart = () => {
    toast("Removed All From Cart", { icon: "🛒" });

    dispatch({ type: "CLEAR_CART" });
  };

  const cartLength = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart && cart.length > 0) {
      dispatch({ type: "CLEAR_CART" });
      cart.forEach((item) => dispatch({ type: "ADD_ITEM", item }));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
        cartLength,
        deleteAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export default CartContext;

export { CartProvider, useCart };
