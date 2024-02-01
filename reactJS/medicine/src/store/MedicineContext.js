import React from "react";

const MedicineContext = React.createContext({
    items: [],
    addMedicine: (item) => {},
    cartItems: [],
    cartTotalAmount: 0,
    addItemToCart: (item) => {},
})


export default MedicineContext;