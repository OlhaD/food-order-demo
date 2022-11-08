import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;
  const [isCheckout, setIsCheckout] = useState(false);

  if (cartContext.totalAmount === 0) {
    return <Modal onClose={props.cartClick}>Cart is empty!</Modal>;
  }

  const cartAddHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmCheckoutHandler = () => {
    setIsCheckout(false);
  };

  const cancelCheckoutHandler = () => {
    setIsCheckout(false);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.cartClick}>
        Close
      </button>
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  return (
    <Modal onClose={props.cartClick}>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartAddHandler.bind(null, item)}
            onRemove={cartRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onCheckout={confirmCheckoutHandler}
          onCancel={cancelCheckoutHandler}
        ></CheckoutForm>
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
