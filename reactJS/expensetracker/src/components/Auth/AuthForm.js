import React, { useCallback, useRef, useState, useContext, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import ExpenseContext from "../../store/ExpenseContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const urls = {
    login: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
    signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
}

const AuthForm = (props) =>{
    const history = useHistory();
    const authCtx = useContext(ExpenseContext);

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPasswordRef = useRef();
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLogin, setIsLogin] = useState(authCtx.isLoggedIn);
    const [isLoginSucessful, setIsLoginSucessful] = useState(false);
    const [output, setOutput] = useState('');

    const signUpLoginHandler = (event) => {
        event.preventDefault();
        setIsSignUp((isSignUp) => {
            return !isSignUp;
        });
    }

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

    const loginFirebaseUser = useCallback( async (userData) => {
        let url = '';
        if(isSignUp){
            url = urls.signUp;
        }else{
            url = urls.login;
        }
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
            console.log(data);
            if(data && data.idToken){
                authCtx.login(data.idToken);
                if(data.kind == "identitytoolkit#SignupNewUserResponse"){
                    responseMsg('Sign Up Successful');
                }else{
                    responseMsg('Login Successful');
                }
                history.replace('/profile');
            }
            responseMsg(data);
        } catch (err) {
            console.log(err);
            responseMsg(err);
        }
    },[isSignUp]);


    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value,
        }
                
        if( inputConfirmPasswordRef.current.value == inputPasswordRef.current.value){
            loginFirebaseUser(userData);
        }else {
            responseMsg('Please enter the same password');
        }        
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
                <Form.Group className='row mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={inputPasswordRef} />
                </Form.Group>
                <Form.Group className='row mb-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password'ref={inputConfirmPasswordRef} />
                </Form.Group>
                <Button className='text-right' type='submit'>
                    {!isSignUp ? 'Login': 'Sign up'}
                </Button>
                <Form.Group>
                    <Link to='/forgotPassword'>Forgot Password?</Link>
                </Form.Group>
            </Form>
            <hr />
            <Button className="btn btn-secondary" onClick={signUpLoginHandler}>
            {!isSignUp ? 'Don\'t have an account? Sign Up': 'Have an account? Login'}
            </Button>
        </div>
        </>
    );
};

export default AuthForm;