import { useState } from "react";
import { useRef } from "react";
import classes from "./CheckoutForm.module.scss";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const checkoutFormSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!isFormValid) {
      return;
    }

    props.onCheckout({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const getControlClasses = (isValid) => {
    return `${classes.control} ${isValid ? "" : classes.invalid}`;
  };

  const nameControlClasses = getControlClasses(formInputsValidity.name);
  const streetControlClasses = getControlClasses(formInputsValidity.street);
  const postalCodeControlClasses = getControlClasses(
    formInputsValidity.postalCode
  );
  const cityControlClasses = getControlClasses(formInputsValidity.city);

  return (
    <form className={classes.form} onSubmit={checkoutFormSubmitHandler}>
      <div className={nameControlClasses}>
        <label for="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please entere a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label for="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please entere a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label for="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef}></input>
        {!formInputsValidity.postalCode && (
          <p>Please entere a valid postal code!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label for="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
