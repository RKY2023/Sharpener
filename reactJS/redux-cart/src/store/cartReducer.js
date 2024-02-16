import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
    totalItems: 0,
    items: [],
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        setCart(state, actions) {
            state.totalItems = actions.payload.totalItems;
            state.items = actions.payload.items;
        },
        addTocart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find( item => item.id === newItem.id);
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    description: newItem.description,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalItems++;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalItems++;
            }
        },
        removeToCart(state, action) {
            const removeItemId = action.payload;
            const existingItem = state.items.find( item => item.id === removeItemId);
            state.totalItems--;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items = state.items.filter( item => {
                    return item.id != removeItemId;
                });
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});


export const cartActions = cartSlice.actions;
export default cartSlice;