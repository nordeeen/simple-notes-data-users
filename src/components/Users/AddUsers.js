import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUsersHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // return console.error("Something went wrong!");
      setError({
        title: "Invalid Username",
        message: "Please enter a name and age (no-empty values)",
      });
    }

    if (enteredAge < 0) {
      // return console.error("invalid your age");
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( < 0 )",
      });
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

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card classCSS={classes.input}>
        <form onSubmit={addUsersHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
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
