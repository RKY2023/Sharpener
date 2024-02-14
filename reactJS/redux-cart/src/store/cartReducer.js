import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
    totalItems: 0,
    cartItems: [],
    isVisible: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addTocart(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
            state.totalItems = state.totalItems + 1;
        },
        cartVisibilityToggle(state) {
            state.isVisible = !state.isVisible;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;