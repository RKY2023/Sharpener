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

  let proper;
  if(filterYear === '' )
    proper = props.items;
  else proper = props.items.filter( expense => (expense.date.getFullYear() == filterYear));


  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filterYear} 
        onChangeFilter={filterChangeHandler}
      />

      
      {proper.map( (expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
