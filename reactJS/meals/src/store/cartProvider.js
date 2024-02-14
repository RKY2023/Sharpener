import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    

    const addItemToCartHandler = (Item) =>{
        // cartContext.items.push(item);
        setItems([...items, Item]);
    }

    const removeItemToCartHandler = (id) => {

    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

// write a logic to club the same items together and show the final quantity
// witew a logic for showing total amount
// styling


export default CartProvider;