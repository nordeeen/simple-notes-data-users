import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (eName, eAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: eName, age: eAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
