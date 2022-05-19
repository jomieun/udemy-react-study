import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter_year">Filter by year</label>
        <select
          name="filter_year"
          id="filter_year"
          value={props.selected}
          onChange={filterChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
