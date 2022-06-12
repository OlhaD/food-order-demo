import React from "react";
import mealImg from "../../../assets/meals.jpg";
import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
