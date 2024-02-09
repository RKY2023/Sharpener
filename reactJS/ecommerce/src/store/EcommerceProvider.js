import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext";

const EcommerceProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [user, setUser] = useState([]);

    const addToCartHandler = (item) => {
        setItems([...items, item]);
        setTotalItems(totalItems+1);
    }

    const setUserContactHandler = (userData) => {
        setUser(userData);
    }

    const ecommerceCtx = {
        productArr: [
            {
                id: 1,
                title: 'Colors',
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            },
            {
                id: 2,
                title: 'Black and white Colors',
                price: 50,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            },
            {
                id: 3,
                title: 'Yellow and Black Colors',
                price: 70,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            },
            {
                id: 4,
                title: 'Blue Color',
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            }
        ],
        items: items,
        totalItems: totalItems,
        addToCart: addToCartHandler,
        user: user,
        setUserContact: setUserContactHandler,
    }

    // console.log(ecommerceCtx.items);

    return (
        <EcommerceContext.Provider value={ecommerceCtx}>
            {props.children}
        </EcommerceContext.Provider>
    );
};

export default EcommerceProvider;