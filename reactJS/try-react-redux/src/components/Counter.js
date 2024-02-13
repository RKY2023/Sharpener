import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () =>{
        dispatch({ type: 'inc'});
    };

    const decrementHandler = () =>{
        dispatch({ type: 'dec'});
    };

    return (
        <>
        <Container>
            <Row>
                <Col className='text-center m-5'>
                    <h1>{counter}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={incrementHandler}>Increment</Button>
                </Col>
                <Col>
                    <Button onClick={decrementHandler}>Decrement</Button>
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default Counter;