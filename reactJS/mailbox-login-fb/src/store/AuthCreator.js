import { useCallback } from "react";
import { AuthActions } from "./AuthSlice";

export const AuthFirebaseLogin = (dispatch) => {
    const SignUpLogin = useCallback( async () => {
        const url ='';
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(),
                headers: {
                    'Content-Type' : 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);
            if( data && data.token){
                dispatch(AuthActions.login(data.token));
            } else {
                console.log(data);
            }
        } catch (err) {
            console.log(err);
        }
    })
};

