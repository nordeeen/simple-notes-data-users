import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUsersHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // return console.error("Something went wrong!");
      setError({
        title: "Invalid Username",
        message: "Please enter a name and age (no-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      // return console.error("invalid your age");
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( < 0 )",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    // console.log(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const addUsernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const addAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classCSS={classes.input}>
        <form onSubmit={addUsersHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="input your name"
            value={enteredUsername}
            onChange={addUsernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            placeholder="input your age"
            value={enteredAge}
            onChange={addAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
