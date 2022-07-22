import React from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  return (
    <>
      <Card classCSS={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" placeholder="input your age" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
