import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        LocationOfExpenditure={props.items[0].location}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        LocationOfExpenditure={props.items[1].location}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        LocationOfExpenditure={props.items[1].location}
        />
    </Card>
  );
}

export default Expenses;
