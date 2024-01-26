import React from "react";
import logo from '../../assets/mealsImg.jpg';
import classes from './Headers.module.css';
import HeaderCardButton from "./HeaderCardButton";
import Meals from "../Meals/Meals";

const Headers = props => {
    return (
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton />
        </header>
        <div className={classes["main-image"]}>
            <img src={logo}></img>
        </div>
        </>
    )
}

export default Headers;