import React, { useState, useRef } from "react";

// import "./UserForm.css";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
//   const [enteredUserName, setUserName] = useState("");
//   const [enteredUserAge, setUserAge] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();
  const [error, setError] = useState(null);

//   const userNameChangeHandler = (event) => {
//     setUserName(event.target.value);
//   };

//   const userAgeChangeHandler = (event) => {
//     setUserAge(event.target.value);
//   };
  const onConfirmHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameInputRef.current.value;

    if (
        enteredName.trim().length === 0 ||
        enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const tt = {
      name: enteredName,
      id: Math.random().toString(),
      age: parseInt(enteredAge),
      collegeName: enteredCollegeName,
    };

    props.onAddUser(tt);
    // setUserName("");
    // setUserAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeNameInputRef.current.value = '';
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
              ref={nameInputRef}
            ></input>
          </div>
          <div className="">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              ref={ageInputRef}
            ></input>
          </div>
          <div className="">
            <label htmlFor="collegeName">College Name</label>
            <input
              id="collegeName"
              type="text"
              ref={collegeNameInputRef}
            ></input>
          </div>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
