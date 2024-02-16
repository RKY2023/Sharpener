import { configureStore } from '@reduxjs/toolkit';
import ExpenseReducer from './ExpenseReducer';
import AuthReducer from './AuthReducer';

const store = configureStore({
    reducer: {
        expense: ExpenseReducer,
        auth: AuthReducer,
    },
});

export default store;