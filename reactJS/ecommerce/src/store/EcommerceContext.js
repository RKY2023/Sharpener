import React from 'react';

const EcommerceContext = React.createContext({
    productArr: [],
    items: [],
    totalItems: 0,
    addToCart: () => {},
    user: [],
    setUserContact: () => {},
})

export default EcommerceContext;