import React from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const App = () => {
  return (
    <>
      <AddUsers />
      <UsersList users={[]} />
    </>
  );
};

export default App;
