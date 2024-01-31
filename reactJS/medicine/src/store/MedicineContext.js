import React from "react";

const MedicineContext = React.createContext({
    items: [],
    totalAmount: 0,
    addMedicine: () => {},
})

export default MedicineContext;