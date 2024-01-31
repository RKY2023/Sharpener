import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';

import CartContext from "../../store/cart-context";

// const classes = '';

const HeaderCardButton = props => {
    const cartCtx = useContext(CartContext);

    const noOfCartItems = cartCtx.items.reduce( (curNumber, item)=> {
        return curNumber + item.amount;
    }, 0);

    let cartTotalItems = 0;
    cartCtx.items.forEach((item) => {
        cartTotalItems += Number(item.quantity);
    });

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartTotalItems}</span>
    </button>
}

export default HeaderCardButton;