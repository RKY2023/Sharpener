import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () =>{
        // dispatch({ type: 'inc'});
        dispatch(counterActions.increment());
    };

    const decrementHandler = () =>{
        // dispatch({ type: 'dec'});
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () =>{
        // dispatch({ type: 'dec'});
        dispatch(counterActions.increase(10));  // 10 is automated as payload
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