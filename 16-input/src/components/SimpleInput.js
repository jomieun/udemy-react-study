import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const enteredNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = enteredNameRef.current.value;

    if (enteredValue === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredValue);
    setEnteredName("");
  };

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredNameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
