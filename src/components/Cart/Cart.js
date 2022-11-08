import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

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

  const confirmCheckoutHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-demo-b1e6f-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cancelCheckoutHandler = () => {
    setIsCheckout(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartRemoveHandler.bind(null, item.id)}
          onAdd={cartAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onCheckout={confirmCheckoutHandler}
          onCancel={cancelCheckoutHandler}
        />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
