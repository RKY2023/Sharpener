import React from 'react';

const EcommerceContext = React.createContext({
    items: [],
    totalItems: 0,
    addToCart: () => {},
})

export default EcommerceContext;