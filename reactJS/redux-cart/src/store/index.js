import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cartReducer';

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;