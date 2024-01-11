import React, { useState } from "react";

// import "./UserForm.css";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    // setIsValid(true);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
    // setIsValid(true);
  };
  const onConfirmHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const tt = {
      name: enteredUserName,
      id: Math.random().toString(),
      age: parseInt(enteredUserAge),
    };

    props.onAddUser(tt);
    setUserName("");
    setUserAge("");
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler} className="user-form__controls">
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUserName}
              onChange={userNameChangeHandler}
            ></input>
          </div>
          <div className="">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={enteredUserAge}
              onChange={userAgeChangeHandler}
            ></input>
          </div>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
