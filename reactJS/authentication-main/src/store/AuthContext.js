import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    // const logg

    const authContext = {
        token: '',
        isLoggedIn: false,
        login: (token) => {},
        logout: () => {},
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;