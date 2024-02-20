import React, { useState } from "react";
import App from "../App";

const ExpenseContext = React.createContext({
   token: '',
   login: (token) => {},
   logout: () => {},
   isLoggedIn: false,
   expense: [],
});

export const ExpenseContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const isLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }
    const expenseProvider = {
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: isLoggedIn,
        expense: [],
    }

    return (
        <ExpenseContext.Provider value={expenseProvider}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
export default ExpenseContext;