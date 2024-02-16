import { createSlice } from '@reduxjs/toolkit';

const initialExpenseStore = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expenseData',
    initialState: initialExpenseStore,
    reducers: {
        addExpense(state, action) {
            state.expenses = [...state.expenses, action.payload];
        },
        removeExpense(state, action) {
            state.expenses = [];
        },
        premium(state) {
            state.expenses = [];
        },
    },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;