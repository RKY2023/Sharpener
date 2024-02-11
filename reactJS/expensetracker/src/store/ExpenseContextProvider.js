import React from "react";
import App from "../App";

const ExpenseContextProvider = React.createContext({
   expense: [],

});


const ExpenseCtxProvider = (props) => {
    const expenseProvider = {
        expense: [],
    }

    return (
        <ExpenseContextProvider.Provider value={expenseProvider}>
            <App />
        </ExpenseContextProvider.Provider>
    )
}