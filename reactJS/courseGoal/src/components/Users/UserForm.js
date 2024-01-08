import React, { useState } from "react";

import './UserForm.css';

const UserForm = (props) => {
    const [enteredUserName, setUserName] = useState('');
    const [enteredUserAge, setUserAge] = useState('');
    

    const userNameChangeHandler = (event) =>{
        setUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) =>{
        setUserAge(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const tt = {
            name: enteredUserName,
            age: enteredUserAge,
        }
        console.log(tt);
        props.onAddUser(tt);
        
    }
    return (
        <form onSubmit={onSubmitHandler} className="user-form__controls">
            <div className="user-form__control">
                <label>Username</label>
                <input type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
            </div>
            <div className="user-form__control">
                <label>Age</label>
                <input type="number" value={enteredUserAge} onChange={userAgeChangeHandler} min="18" max="125"></input>
            </div>
            <button type="submit"> add User</button>
        </form>
    )
}

export default UserForm;