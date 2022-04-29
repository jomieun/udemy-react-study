import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
    </Card>
  );
};

export default Expense;
