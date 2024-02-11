import React, { useCallback, useRef, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const urls = {
    login: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
    signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
}

const AuthForm = (props) =>{
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPasswordRef = useRef();
    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = (event) => {
        event.preventDefault();
        setIsLogin(!isLogin);
    }

    let url = urls.login;

    if(!isLogin){
        url = urls.signUp;
    }

    const responseMsg = (data) => {
        if(data && data.error && data.error.message){
            if(data.error.status == 400 && data.error.message == 'EMAIL_EXISTS')
            console.log('Invalid password');
        }else if(data && data.error && data.error.message){
            // if(data.error.status == 400 && data.error.message == 'EMAIL_EXISTS')
            // console.log('Invalid password');
            console.log(isLogin?'Login':'Signup', data.error.status, data.error.message)
        }else{
            console.log(data);
        }
    }

    const loginFirebaseUser = useCallback( async (userData) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            responseMsg(data);
        } catch (err) {
            responseMsg(err);
        }
    },[]);

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value,
        }
        
        const enteredConfirmPasswrord = inputConfirmPasswordRef.current.value;

        loginFirebaseUser(userData);
    }
  
    return (
        <>
        <div className="container p-5">
            <Form className='col pb-3' onSubmit={submitHandler}>
                <Form.Group className="row mb-3">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' className="col-6" ref={inputEmailRef} />
                </Form.Group>
                <Form.Group className='row mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={inputPasswordRef} />
                </Form.Group>
                <Form.Group className='row mb-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password'ref={inputConfirmPasswordRef} />
                </Form.Group>
                <Button className='text-right' type='submit'>
                    {isLogin ? 'Login': 'Sign up'}
                </Button>
            </Form>
            <hr />
            <Button className="btn btn-secondary" onClick={loginHandler}>
            {isLogin ? 'Don\'t have an account? Sign Up': 'Have an account? Login'}
            </Button>
        </div>
        </>
    );
};

export default AuthForm;