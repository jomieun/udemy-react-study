import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./UserForm.module.css";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const userNameInputRef = useRef();
  const userAgeInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userName = userNameInputRef.current.value;
    const userAge = userAgeInputRef.current.value;

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a vaild name and age (non-empty values)",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(userName, userAge);

    // init
    userNameInputRef.current.value = "";
    userAgeInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Usernamne</label>
          <input id="username" type="text" ref={userNameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
