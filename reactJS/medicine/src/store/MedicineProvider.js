import React,{ useContext, useState } from "react";
import MedicineContext from "./MedicineContext";

const MedicineProvider = (props) => {
    // const MedicineCtx = useContext(MedicineContext);
    
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addMedicineHandler = (item) => {
        setItems([...items, item]);
    }

    const addItemToCartHandler = (cartItem) => {
        const itemId = cartItem.id;
        // updating cartItems
        const checkItemOnCart = cartItems.filter( (item) => {
            return item.id == itemId;
        })
        if(checkItemOnCart.length == 0)
            setCartItems([...cartItems, cartItem]);
        else {
            const oldCartItems = cartItems.filter( (item) => {
                return item.id != itemId;
            })
            const newCartQty = Number(checkItemOnCart[0].qty) + Number(cartItem.qty);
            const newCartItem = {...cartItem, qty:newCartQty};
            setCartItems([...oldCartItems, newCartItem]);
        }
        // updating items
        const updateItem = items.filter( (item) => {
            return item.id == itemId;
        })
        const oldItems = items.filter( (item) => {
            return item.id != itemId;
        })
        const newQty = Number(updateItem[0].qty) - Number(cartItem.qty);
        const newItem = {...cartItem, qty:newQty};
        setItems([...oldItems, newItem]);
        console.log(medicineCtx);
    }

    const medicineCtx = {
        items: items,
        addMedicine: addMedicineHandler,
        cartItems: cartItems,
        cartTotalAmount: 0,
        addItemToCart: addItemToCartHandler,
    }
    
    console.log(medicineCtx);
    return (
        <MedicineContext.Provider value={medicineCtx}>
            {props.children}
        </MedicineContext.Provider>
    )
}

export default MedicineProvider;