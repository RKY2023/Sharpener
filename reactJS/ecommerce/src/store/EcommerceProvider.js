import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext";

const EcommerceProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(initialToken);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    const loginHandler = (token) =>{
        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem('token', token)
        const tokenTimer = setTimeout( () => {
            console.log('Token Expired');
            logoutHandler();
        },600000);
        const clearTokenTimer = () => {
            clearTimeout(tokenTimer);
        }
    }

    const logoutHandler = () => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    }
  
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
        login: loginHandler,
        logout: logoutHandler,
        token: token,
        isLoggedIn: isLoggedIn,
    }

    // console.log(ecommerceCtx.items);

    return (
        <EcommerceContext.Provider value={ecommerceCtx}>
            {props.children}
        </EcommerceContext.Provider>
    );
};

export default EcommerceProvider;