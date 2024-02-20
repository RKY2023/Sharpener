import { createSlice } from '@reduxjs/toolkit';

const initialExpenseStore = {
    expenses: [],
    theme: localStorage.getItem('theme') || 'light',
    totalExpense: 0,
    worthPremium: false,
    isActivatePremium: false,
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
        toggleTheme(state) {
            const bodyElement = document.getElementsByTagName('body')[0];
            if(state.theme == 'light'){
                bodyElement.setAttribute('data-bs-theme','dark');
                state.theme = 'dark';
                localStorage.setItem('theme','dark');
            } else {
                bodyElement.setAttribute('data-bs-theme','light');
                state.theme = 'light';
                localStorage.setItem('theme','light');
            }
        },
        setTheme(state) {
            const bodyElement = document.getElementsByTagName('body')[0];
            const getTheme = localStorage.getItem('theme');
            if(getTheme === null){
                state.theme = 'light';
                localStorage.setItem('theme','light');
                bodyElement.setAttribute('data-bs-theme','light');
            }
        },
        checkExpense10k(state, action) {
            const newExpenses = action.payload;
            const prices = newExpenses.map( exp => exp.money);
            const totalExpense = prices.reduce((num, idx )=> {return parseFloat(num)+parseFloat(idx);});
            if(totalExpense > 10000){
                state.worthPremium = true;
            } else {
                state.worthPremium =  false;
            }
        },
        activatePremium(state) {
            if(state.worthPremium === true){
                state.isActivatePremium = true;
            }
        }
    },
});

export const expenseCSV = () => {
    
}

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;