import React, { useCallback, useContext, useRef, useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ExpenseContext from "../../store/ExpenseContext";

const urls = {
    NameAndProfileUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
    update: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
    sendEmailVerification: '',
}

const ProfileUpdate = (props) => {
    const inputNameRef = useRef();
    const inputImgUrlRef = useRef();
    const inputEmailRef = useRef();
    const authCtx = useContext(ExpenseContext);
    const tokenId = authCtx.token;

    const verifyEmailHandler = (e) => {
        e.preventDefault();
        const apiPayload = {
            idToken: authCtx.token,
            requestType: 'VERIFY_EMAIL'
        }
        verifyEmailToFirebase(apiPayload);
    }

    const verifyEmailToFirebase = useCallback( async (apiPayload) => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(apiPayload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if(data && data.kind){
                if(data.kind == "identitytoolkit#GetOobConfirmationCodeResponse")
                    console.log(data.kind);
                console.log('Email Confirmed Successfully');
            }
            console.log(data);
        }catch(err) {
            console.log(err);
        }
    },[]);


    const submitHandler = (e) => {
        e.preventDefault();
        const apiPayload = {
            idToken: authCtx.token,
            displayName: inputNameRef.current.value,
            photoUrl: inputImgUrlRef.current.value,
            // deleteAttribute: '',
            returnSecureToken: false
        }
        updateUserDetailToFirebase(apiPayload);
    }

    const updateUserDetailToFirebase = useCallback( async (apiPayload) => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';
        try{
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(apiPayload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if(data && data.kind){
                if(data.kind == "identitytoolkit#SetAccountInfoResponse")
                    console.log(data.kind);
                console.log('Profile Updated Successfully');
            }
            console.log(data);
        }catch(err) {
            console.log(err);
        }
    },[]);

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
                    inputNameRef.current.value = data.users[0].displayName;
                    inputImgUrlRef.current.value = data.users[0].photoUrl;
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
    },[]);


    return (
        <>
        <Container>
        <Form onSubmit={submitHandler}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' ref={inputNameRef} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Profile Url</Form.Label>
                    <Form.Control type='input' ref={inputImgUrlRef}/>
                </Form.Group>
            </Row>
            <Row className="mb-3 m-auto">
                <Button type='submit'>Update</Button>
            </Row>
        </Form>
        <Form onSubmit={verifyEmailHandler}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={inputEmailRef} />
                </Form.Group>
                <Form.Group as={Col} className='m-auto'>
                    <Button className='btn-success' type="submit">Verify</Button>
                </Form.Group>
            </Row>
        </Form>
        </Container>
        <Container className="m-5">
            <Link to='/expense'>Go to Expense</Link>
        </Container>
        </>
    );
};
export default ProfileUpdate;