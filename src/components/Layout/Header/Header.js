import React from "react";
import mealImg from "../../../assets/meals.jpg";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={classes.header}>Main header</div>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
