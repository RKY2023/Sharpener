import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext";

const EcommerceProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addToCartHandler = (item) => {
        setItems([...items, item]);
        setTotalItems(totalItems+1);
    }

    const ecommerceCtx = {
        items: items,
        totalItems: totalItems,
        addToCart: addToCartHandler,
    }

    // console.log(ecommerceCtx.items);

    return (
        <EcommerceContext.Provider value={ecommerceCtx}>
            {props.children}
        </EcommerceContext.Provider>
    );
};

export default EcommerceProvider;