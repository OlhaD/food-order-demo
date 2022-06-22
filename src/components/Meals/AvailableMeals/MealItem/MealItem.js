import React, { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import classes from "./MealItem.module.scss";
import MealItemsForm from "./MealItemsForm/MealItemsForm";

const MealItem = (props) => {
  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      ...meal,
      amount: +amount
    });
  }

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemsForm meal={meal} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
