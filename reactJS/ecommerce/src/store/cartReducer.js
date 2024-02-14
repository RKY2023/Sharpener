import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
    totalItems: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItemToCart(state) {
            state.totalItems = state.totalItems +1;
        },
        removeItemToCart(state) {
            state.totalItems = state.totalItems -1;
        },
    },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;