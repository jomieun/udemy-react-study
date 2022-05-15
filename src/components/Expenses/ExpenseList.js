import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.item.length === 0)
    return <h1 className="expenses-list__fallback">No expenses found</h1>;

  return props.item.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    </ul>
  ));
}

export default ExpenseList;
