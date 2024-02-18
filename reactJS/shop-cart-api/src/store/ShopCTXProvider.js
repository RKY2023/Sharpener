import React, { useState, useCallback, useEffect } from 'react';

const ShopContext = React.createContext({
    items: [],
    cartItems: [],
    totalCartItems: 0,
    addItems: (item) => {},
    addItemToCart: (item) => {},
    removeItemToCart: (id) => {},
});

export const ShopProvider = (props) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);

    const addItems = (newItem) => {
        items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            desc: newItem.desc,
            quantity: 1,
            totalPrice: newItem.price,
        });
    }

    const addItemToCart = (newItem, quantity=1 ) => {
        const existingItem = cartItems.filter((item) => item.id === newItem.id);
        let newCartItems = cartItems;
        if(existingItem.length === 0){
            newCartItems.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                desc: newItem.desc,
                quantity: quantity,
                totalPrice: newItem.price,
            });
        } else {
            newCartItems = cartItems.filter((item) => {
                return item.id!= newItem.id;
            })
            newCartItems.push({
                id: existingItem[0].id,
                name: existingItem[0].name,
                price: existingItem[0].price,
                desc: existingItem[0].desc,
                quantity: existingItem[0].quantity + quantity,
                totalPrice: existingItem[0].totalPrice + (existingItem[0].price * quantity),
            });
        }
        setCartItems(newCartItems);
        setTotalCartItems(totalCartItems + quantity);
    }

    const removeItemToCart = (removeItemId, quantity=1) => {
        const existingItem = cartItems.filter((item) => item.id === removeItemId);
        let newCartItems = cartItems;
        if(existingItem[0].quantity === 1){
            newCartItems = cartItems.filter((item) => {
                return item.id!= removeItemId;
            })
        } else {
            newCartItems = cartItems.filter((item) => {
                return item.id!= removeItemId;
            })
            newCartItems.push({
                id: existingItem[0].id,
                name: existingItem[0].name,
                price: existingItem[0].price,
                desc: existingItem[0].desc,
                quantity: existingItem[0].quantity - quantity,
                totalPrice: existingItem[0].totalPrice - (existingItem[0].price * quantity),
            });
        }
        setCartItems(newCartItems);
        setTotalCartItems(totalCartItems - quantity);
    }
    
    const shopCtx = {
        items: items,
        cartItems: cartItems,
        totalCartItems: totalCartItems,
        addItems: addItems,
        addItemToCart: addItemToCart,
        removeItemToCart: removeItemToCart,
    };

    const pushItemToFirebase = useCallback( async () => {
        let url ='https://atomic-matrix-193707-default-rtdb.firebaseio.com/shopCart.json'
        try{
            const response = await fetch(url,{
                method: 'PUT',
                body: JSON.stringify({
                    cartItems: cartItems,
                    totalCartItems: totalCartItems,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            console.log(data);
           
        } catch (err) {
            console.log(err);
        }
    },[cartItems, totalCartItems]);

    useEffect(() =>{
        pushItemToFirebase();
    },[cartItems, totalCartItems]);

    return (
        <ShopContext.Provider value={shopCtx}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContext;