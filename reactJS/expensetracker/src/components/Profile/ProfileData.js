import React, { useContext, useEffect, useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import ExpenseContext from "../../store/ExpenseContext";

const ProfileData = (props) => {
    const [name, setName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const authCtx = useContext(ExpenseContext);
    const tokenId = authCtx.token;

    const getUserDetailToFirebase = useCallback( async (tokenId) => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    idToken: tokenId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if(data && data.kind){
                if(data.kind == "identitytoolkit#GetAccountInfoResponse")
                    console.log(data.kind);
                console.log('got User Data Successfully');
                if(data.users){
                    setName(data.users[0].displayName);
                    setProfileUrl(data.users[0].photoUrl);
                    // data.users[0].emailVerified
                }
            }
            console.log(data);
        }catch(err) {
            console.log(err);
            console.log(err.error.message);
        }
    },[tokenId]);

    useEffect( () => {
        getUserDetailToFirebase(tokenId);
    },[tokenId]);

    return (
        <>
        <div>
            Name: {name} <br></br> Url: {profileUrl}
        </div>
        <Link to='/expense'>Go to Expense</Link>
        </>
    );
};
export default ProfileData;