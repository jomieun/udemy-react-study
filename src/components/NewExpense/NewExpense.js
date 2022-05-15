import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    disableFormHandler();
  };

  const enableFormHandler = () => {
    setShowForm(true);
  };

  const disableFormHandler = () => {
    setShowForm(false);
  };

  let formContent = (
    <button onClick={enableFormHandler}>Add New Expense</button>
  );

  if (showForm) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={disableFormHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
