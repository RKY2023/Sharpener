import React from "react";
import AvailableMeals from "./AvaillableMeals";
import MealsSummary from "./MealsSummary";
// import classes from './Meals.module.css';

const Meals = () => {
    return <>
        <MealsSummary />
        <AvailableMeals />
    </>
}

export default Meals;