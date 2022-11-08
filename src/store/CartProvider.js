import React, { useContext, useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  total: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return addItem(action.value, state);
  } else if (action.type === "REMOVE") {
    return removeItem(action.value, state);
  } else if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const addItem = (item, state) => {
  const updatedTotal = state.total + item.amount;
  const updatedTotalAmount = state.totalAmount + item.price * item.amount;

  let updatedItems = [...state.items];

  const existingItemIndex = state.items.findIndex((x) => x.id === item.id);

  const existingCartItem = state.items[existingItemIndex];

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + item.amount,
    };
    updatedItems[existingItemIndex] = updatedItem;
  } else {
    updatedItems.push(item);
  }

  return {
    items: updatedItems,
    total: updatedTotal,
    totalAmount: updatedTotalAmount,
  };
};

const removeItem = (id, state) => {
  const existingItemIndex = state.items.findIndex((x) => x.id === id);
  const existingCartItem = state.items[existingItemIndex];

  if (state.total === 0) {
    return {
      items: [],
      total: 0,
      totalAmount: 0,
    };
  }

  let updatedItems = [...state.items];
  if (existingCartItem.amount === 1) {
    updatedItems.splice(existingItemIndex, 1);
  } else {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount - 1,
    };
    updatedItems[existingItemIndex] = updatedItem;
  }
  const updatedTotal = state.total--;
  const updatedTotalAmount = state.totalAmount - existingCartItem.price;

  return {
    items: updatedItems,
    total: updatedTotal,
    totalAmount: updatedTotalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      value: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      value: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const value = {
    items: cartState.items,
    total: cartState.total,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
