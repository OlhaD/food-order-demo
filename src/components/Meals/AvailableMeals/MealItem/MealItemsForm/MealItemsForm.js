import React, { useContext } from "react";
import CartContext from "../../../../../store/cart-context";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemsForm.module.scss";

const MealItemsForm = (props) => {
  const meal = props.meal;
  const cartContext = useContext(CartContext);

  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: "amount_" + meal.id,
        type:"number",
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1
      }}  />
      <button className={classes.button} onClick={() => cartContext.addItem(meal)}>+ Add</button>
    </form>
  );
};

export default MealItemsForm;
