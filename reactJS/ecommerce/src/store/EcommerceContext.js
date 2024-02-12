import React from 'react';

const EcommerceContext = React.createContext({
    productArr: [],
    items: [],
    totalItems: 0,
    addToCart: () => {},
    user: [],
    setUserContact: () => {},
    login: (token) => {},
    logout: () => {},
    token: null,
    isLoggedIn: false,
})

export default EcommerceContext;