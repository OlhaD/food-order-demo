import React, { useContext } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = (item) => {
    debugger;
    cartContext.items.push({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = (id) => {
    debugger;
  };

  const value = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
