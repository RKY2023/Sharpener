import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    updatePassword: (token) => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
        const timer1 = setTimeout( ()=>{
            console.log('s');
            logoutHandler();
        },300000);
        const ct = () => {
            clearTimeout(timer1);
        }
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const passwordUpdateHandler = () => {

    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        updatePassword: passwordUpdateHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;