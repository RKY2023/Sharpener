import React, { useRef, useCallback, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const ContactUS = (props) => {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPhoneNoRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: inputNameRef.current.value,
            email: inputEmailRef.current.value,
            phoneno: inputPhoneNoRef.current.value,
        }
        addUserInFirebase(userData);
    }

    const addUserInFirebase = useCallback( async (userData) => {
        try{
            const url = 'https://atomic-matrix-193707-default-rtdb.firebaseio.com/user.json';
            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            console.log(data);
        }catch(err){
            console.log(err);
        }
    },[]);



    return (
        <>
            <h1> Contact US</h1>
            <section>
                Welcome to contact us page.
            </section>
            <section>
                <h3 className='text-center'> Please enter your data. And we will contact you soon asap.</h3>
                <Container>
                    <Row className='col-9'>
                        <Col >
                        <form className='m-2 p-2' onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder='Abhishek' ref={inputNameRef}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder='Abhishek@gmail.com' ref={inputEmailRef}></Form.Control>
                            </Form.Group>
                            <Form.Group  className="mb-3" controlId="formBasicPhoneNo">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="phoneno" placeholder='9123456789' ref={inputPhoneNoRef}></Form.Control>
                            </Form.Group>
                            <Button type='submit' className="primary">Submit</Button>
                        </form>
                        </Col>
                    </Row>
                </Container>
                
            </section>
        </>
    );
};

export default ContactUS;