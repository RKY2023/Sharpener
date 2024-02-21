import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AuthFirebaseLogin } from "../../store/AuthCreator";

const Auth = (props) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPassword = useRef();

    const [loginType, setLoginType] = useState('login');
    const [status, setStatus] = useState('');

    if(isAuthenticated){
        console.log(isAuthenticated);
    }

    const switchLoginType = (loginType) =>{
        if(loginType === 'login'){
            setLoginType('signUp');
        }else{
            setLoginType('login');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if( inputConfirmPassword.current.value === inputPasswordRef.current.value){
            const userData = {
                email: inputEmailRef.current.value,
                password: inputPasswordRef.current.value,
            }
            dispatch(AuthFirebaseLogin());
        } else {
            setStatus('Please write the same password');
        }
    };

    return (
        <>
        <Container>
            <h2> Login / Sign Up</h2>
            <div>{status}</div>
        </Container>
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="abc@abc.com" ref={inputEmailRef}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" ref={inputPasswordRef} />
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="********" ref={inputConfirmPassword} />
                    <Button type='submit' className="mt-3">{(loginType === 'login') ? 'Login':'Sign Up'}</Button>
                    <br></br>
                    <Link href='/forgotPassword' className="mt-3">Forgot Password?</Link>
                    <hr></hr>
                    <Button onClick={switchLoginType}>{(loginType === 'login') ? 'Don\'t have an account? Sign Up':'Already have an account? Login'}</Button>
                </Form.Group>
            </Form>
        </Container>
        </>
    );

};

export default Auth;