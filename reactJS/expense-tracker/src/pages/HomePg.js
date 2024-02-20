import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import ExpenseContext from "../store/ExpenseContext";
import { Link } from "react-router-dom/cjs/react-router-dom";


const HomePg = (props) => {
    // const history = useHistory();
    // const authCtx = useContext(ExpenseContext);
    // const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);

    
    // useEffect(()=>{
    //     if(!authCtx.isLoggedIn){
    //         // history.replace('/auth');
    //     }
    // },[]);

    return (
        <>
        <h1> Home Page</h1>
        {/* <div>User Status: {isLoggedIn? 'LoggedIn':'Not Login'}</div> */}
        <Link to='/profile'>Go to Profile Page</Link>
        </>
    );
};

export default HomePg;