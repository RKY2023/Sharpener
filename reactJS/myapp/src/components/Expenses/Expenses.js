import React, { useState } from "react";


import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  const filterExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() == filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filterYear} 
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filterExpenses}/>
    </Card>
  );
}

export default Expenses;
