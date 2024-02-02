import React from "react";
import classes from './MovieForm.module.css';

const MovieForm = (props) => {
    

    return (
    <div className={classes.movieForm}>
        <h1>Title</h1>
        <textarea> </textarea>
        <h1>Opening Text</h1>
        <textarea> </textarea>
        <h1>Release Date</h1>
        <textarea> </textarea>
        <button>Add Movie</button>
    </div>
    )
}

export default MovieForm;