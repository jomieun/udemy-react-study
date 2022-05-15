import { useState } from "react";

import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const changeFilterHandler = (year) => {
    console.log(`Expense.changeFilterHandler() ::: ${year}`);
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
