import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.scss";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://food-order-demo-b1e6f-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong..");
      }

      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);

      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setError(error.message);
    });
  }, [setIsLoading]);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  if (error) {
    return <section>{error}</section>;
  }

  return (
    <section className={classes.meals}>
      {!isLoading && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
      {isLoading && <p>Loading..</p>}
    </section>
  );
};

export default AvailableMeals;
