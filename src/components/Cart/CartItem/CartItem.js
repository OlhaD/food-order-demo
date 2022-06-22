import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const amount = "x" + props.amount;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{price}</div>
          <div className={classes.amount}>{amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
