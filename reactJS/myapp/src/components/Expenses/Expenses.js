import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  let filterExpenses;
  if(filterYear === '' )
    filterExpenses = props.items;
  else filterExpenses = props.items.filter( expense => (expense.date.getFullYear() == filterYear));
  console.log(filterExpenses);
  let expensesContent = <p> No result found.</p>;
  if( filterExpenses.length > 0) {
    expensesContent = filterExpenses.map( (expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  if( filterExpenses.length === 1)
    expensesContent.push(<p>Only single Expense here. Please add more...</p>);
  

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filterYear} 
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
