import React, { useContext, useState } from "react";
import CartContext from "../../../../../store/cart-context";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemsForm.module.scss";

const MealItemsForm = (props) => {
  const meal = props.meal;
  const [amount, setAmount] = useState(1);
  const cartContext = useContext(CartContext);

  const addMeal = (meal) => {
    cartContext.addItem({
      ...meal,
      amount: +amount
    });
  }

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  }

  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: "amount_" + meal.id,
        type:"number",
        min: 1,
        max: 5,
        step: 1,
        value: amount,
        onChange: changeAmountHandler
      }}  />
      <button type="button" className={classes.button} onClick={() => addMeal(meal)}>+ Add</button>
    </form>
  );
};

export default MealItemsForm;
