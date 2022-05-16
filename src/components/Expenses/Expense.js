import { useState } from "react";

import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
