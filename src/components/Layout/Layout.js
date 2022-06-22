import React from "react";
import CartProvider from "../../store/CartProvider";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <CartProvider>
        <Header />
        <main>{props.children}</main>
      </CartProvider>
    </>
  );
};

export default Layout;
