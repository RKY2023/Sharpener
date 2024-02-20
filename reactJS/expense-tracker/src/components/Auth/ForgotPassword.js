import React, { useCallback, useRef, useState, useContext, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import ExpenseContext from "../../store/ExpenseContext";
import { useHistory } from "react-router-dom";

const ForgotPassword = (props) =>{
    const history = useHistory();
    const authCtx = useContext(ExpenseContext);

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const [isSignUp, setIsSignUp] = useState(true);
    const [output, setOutput] = useState('');

    const responseMsg = (data) => {
        // console.log(data);
        let out = ''+(!isSignUp?'Login':'Signup');
        if(data && data.error && data.error.message){
            if(!isSignUp && data.error.code == 400 && data.error.message == 'EMAIL_EXISTS'){
                out= +': Invalid password';
                setOutput(out);
            }else if(isSignUp && data.error.code == 400 && data.error.message == 'EMAIL_EXISTS'){
                out= +': Email already exists';
                setOutput(out);
            }else{
                out +=' '+data.error.code +' '+ data.error.message;
                console.log(out)
                setOutput(out);
            }
        }else if(data && data.email && data.kind){
            if(data.kind == "identitytoolkit#SignupNewUserResponse"){
                out +=' '+data.kind;
                setOutput(out);
                return 1;
            }
            
        }else{
            console.log(data);
            setOutput(JSON.stringify(data));
        }
        return 0;
    }

    const loginFirebaseUser = useCallback( async (apiPayload) => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(apiPayload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            if(data.kind == "identitytoolkit#GetOobConfirmationCodeResponse"){
                responseMsg(data);
                history.replace('/auth');
            }            
        } catch (err) {
            console.log(err);
            responseMsg(err);
        }
    },[]);


    const submitHandler = (event) => {
        event.preventDefault();
        const apiPayload = {
            email: inputEmailRef.current.value,
            requestType: 'PASSWORD_RESET',
        }
        loginFirebaseUser(apiPayload);
    }
  
    return (
        <>
        <div className="container p-5">
            <div className="text-center bg-warning">{output}</div>
            <Form className='col pb-3' onSubmit={submitHandler}>
                <Form.Group className="row mb-3">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' className="col-6" ref={inputEmailRef} />
                </Form.Group>
                {/* <Form.Group className='row mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={inputPasswordRef} />
                </Form.Group> */}
                <Button className='text-right' type='submit'>
                    Email password reset link
                </Button>
            </Form>
            <hr />
        </div>
        </>
    );
};

export default ForgotPassword;