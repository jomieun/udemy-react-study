import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const enteredNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("name", enteredNameRef.current.value);
    console.log(enteredNameRef.current.value);
    setEnteredName("");
  };

  const changeNameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredNameRef}
          type="text"
          id="name"
          onChange={changeNameInputHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
