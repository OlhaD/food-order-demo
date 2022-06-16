import React, { useState, useContext } from "react";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import Cart from "../../../Cart/Cart";
import classes from "./HeaderCartButton.module.scss";
import CartContext from "../../../../store/cart-context";

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
        <span className={classes.badge}>{cartContext.total}</span>
      </button>

      {isCartOpened && <Cart cartClick={cartClickHandler} />}
    </>
  );
};

export default HeaderCartButton;
