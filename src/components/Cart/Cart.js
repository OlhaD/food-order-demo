import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;
  
  if(cartContext.totalAmount === 0) {
    return <Modal onClose={props.cartClick}>Cart is empty!</Modal>
  }

  return (
    <Modal onClose={props.cartClick}>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.cartClick}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
