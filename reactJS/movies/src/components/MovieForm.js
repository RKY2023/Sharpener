import React, { useCallback, useRef, useState } from "react";
import classes from './MovieForm.module.css';
import { Button, Form, Row, Col } from 'react-bootstrap';

const MovieForm = (props) => {
    const inputTitleRef = useRef();
    const inputOpeningTextRef = useRef();
    const inputReleaseDateRef = useRef();
    
    const submitHandler = (event) =>{
        event.preventDefault();
        const NewMovieObj = {
            title: inputTitleRef.current.value,
            openingText : inputOpeningTextRef.current.value,
            releaseDate: inputReleaseDateRef.current.value,
        }
        console.log(NewMovieObj);
        props.addMovie(NewMovieObj);
    }

    return (
    <form className={classes.movieForm} onSubmit={submitHandler}>
        <h1>Title</h1>
        <textarea ref={inputTitleRef}> </textarea>
        <h1>Opening Text</h1>
        <textarea ref={inputOpeningTextRef}> </textarea>
        <h1>Release Date</h1>
        <textarea ref={inputReleaseDateRef}> </textarea>
        <hr></hr>
        <button className="">Add Movie</button>
    </form>
    // <Form onSubmit={submitHandler}>
    //     <Row className="mb-3">
    //         <Form.Group as={Col} md="4" controlId="validateText">
    //             <Form.Label>Title</Form.Label>
    //             <Form.Control
    //                 required
    //                 type="text"
    //                 placeholder="Movie Title"
    //             />
    //         </Form.Group>
    //         <Form.Label>Opening Text</Form.Label>
    //         <Form.Control
    //             required
    //             type="text"
    //             placeholder="Movie Title"
    //         />
    //         <Form.Label>Release Date</Form.Label>
    //         <Form.Control
    //             required
    //             type="text"
    //             placeholder="DD-MM-YYYY"
    //         />
    //         <Button variant="primary">Add Movie</Button>
    //     </Row>

    // </Form>

    )
}

export default MovieForm;