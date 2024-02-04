import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
}

export default AuthContextProvider;