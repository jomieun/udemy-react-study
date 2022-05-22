import { useState } from "react";

import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => [...prevUsers, { name: uName, age: uAge }]);
  };

  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
};

export default App;
