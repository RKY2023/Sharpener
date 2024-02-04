import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    updatePassword: (token) => {},
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const logInHandler = (token) => {

    }

    const logoutHandler = () => {

    }

    const passwordUpdateHandler = () => {

    }

    const authContext = {
        token: '',
        isLoggedIn: false,
        login: logInHandler,
        logout: logoutHandler,
        updatePassword: passwordUpdateHandler,
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;