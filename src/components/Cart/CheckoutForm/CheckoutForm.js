import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import { classes } from "./CheckoutForm.module.scss";

const CheckoutForm = (props) => {
  const cartContext = useContext(CartContext);

  const checkoutFormSubmitHandler = () => {
    props.onCheckout();
  };

  return (
    <form onSubmit={checkoutFormSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label for="name">Your name</label>
          <input type="text" id="name"></input>
        </div>
        <div className="form-control">
          <label for="street">Street</label>
          <input type="text" id="street"></input>
        </div>
        <div className="form-control">
          <label for="postal">Postal Code</label>
          <input type="text" id="postal"></input>
        </div>
        <div className="form-control">
          <label for="city">City</label>
          <input type="text" id="city"></input>
        </div>
      </div>
      <div className="form-actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
