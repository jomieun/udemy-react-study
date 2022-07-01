import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const enteredNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredValue = enteredNameRef.current.value;
    setEnteredNameTouched(true);
    if (enteredValue.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredValue);
    setEnteredName("");
  };

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

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
        {nameInputIsInvalid && (
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
