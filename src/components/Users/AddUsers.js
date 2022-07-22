import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUsersHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const addUsernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const addAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <>
      <Card classCSS={classes.input}>
        <form onSubmit={addUsersHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={addUsernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            placeholder="input your age"
            onChange={addAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
