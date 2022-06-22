import React, { useState } from "react";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemsForm.module.scss";

const MealItemsForm = (props) => {
  const meal = props.meal;
  const [amount, setAmount] = useState(1);
  const validationRules = {
    min: 1,
    max: 5,
  };

  const addMeal = (event) => {
    event.preventDefault();

    props.onAddToCart(amount);
  };

  const changeAmountHandler = (event) => {
    const newAmount = event.target.value;
    if (!isAmountValid(newAmount)) return;
    setAmount(newAmount);
  };

  const isAmountValid = (amount) => {
    return (
      amount.trim().length > 0 &&
      amount >= validationRules.min &&
      amount <= validationRules.max
    );
  };

  return (
    <form className={classes.form} onSubmit={addMeal}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + meal.id,
          type: "number",
          min: validationRules.min,
          max: validationRules.max,
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
