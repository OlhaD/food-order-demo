import React, { useState } from "react";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemsForm.module.scss";

const MealItemsForm = (props) => {
  const meal = props.meal;
  const [amount, setAmount] = useState(1);

  const addMeal = (event) => {
    event.preventDefault();

    props.onAddToCart(amount);
  };

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={addMeal}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + meal.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: amount,
          onChange: changeAmountHandler,
        }}
      />
      <button className={classes.button} onClick={() => addMeal(meal)}>
        + Add
      </button>
    </form>
  );
};

export default MealItemsForm;
