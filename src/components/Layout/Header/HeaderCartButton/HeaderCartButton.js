import React, { useState, useContext } from "react";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import Cart from "../../../Cart/Cart";
import classes from "./HeaderCartButton.module.scss";
import CartContext from "../../../../store/cart-context";
import CartProvider from "../../../../store/CartProvider";

const HeaderCartButton = () => {
  const cartContext = useContext(CartContext);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const cartClickHandler = () => {
    setIsCartOpened((isCartOpened) => !isCartOpened);
  };

  return (
    <>
      <button className={classes.button} onClick={cartClickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartContext.totalAmount}</span>
      </button>

      <CartProvider>
        {isCartOpened && <Cart cartClick={cartClickHandler} />}
      </CartProvider>
    </>
  );
};

export default HeaderCartButton;
