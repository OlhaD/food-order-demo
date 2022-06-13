import React from "react";
import classes from "./MealItem.module.scss";
import MealItemsForm from "./MealItemsForm/MealItemsForm";

const MealItem = (props) => {
  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemsForm id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
