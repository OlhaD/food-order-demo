import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import Cart from "../../../Cart/Cart";
import classes from "./HeaderCartButton.module.scss";
import CartContext from "../../../../store/cart-context";

const HeaderCartButton = () => {
  const cartContext = useContext(CartContext);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const cartClickHandler = () => {
    setIsCartOpened((isCartOpened) => !isCartOpened);
  };

  const btnClasses = `${classes.button} ${
    isBtnHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setIsBtnHighlighted(true);

    const timeout = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [cartContext.items]);

  return (
    <>
      <button className={btnClasses} onClick={cartClickHandler}>
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
