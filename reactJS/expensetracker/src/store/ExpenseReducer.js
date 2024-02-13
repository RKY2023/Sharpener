import { createSlice } from '@reduxjs/toolkit';

const initialExpenseStore = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expenseData',
    initialState: initialExpenseStore,
    reducers: {
        addExpense(state) {
            state.expenses = [];
        },
        removeExpense(state) {
            state.expenses = [];
        },
    },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;