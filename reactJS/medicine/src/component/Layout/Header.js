import React from "react";
import classes from './Header.module.css';
import MedicineCart from "./MedicineCart";

const Header = (props) =>{
    return (
        <header className={classes.header}>
            <h1>Medicine Cart</h1>
            <MedicineCart onShowModal={props.onShowModal}/>
        </header>
    )
};

export default Header;