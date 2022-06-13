import React from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import classes from "./Meals.module.scss";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
