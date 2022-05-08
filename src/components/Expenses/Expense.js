import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const changeFilterHandler = (year) => {
    console.log(`Expense.changeFilterHandler() ::: ${year}`);
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expense;
