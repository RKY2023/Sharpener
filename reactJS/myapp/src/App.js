import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet ",
    amount: 94.12,
    date: new Date(2024, 0, 1),
    location : 'New York',
  },
  {
    id: "e2",
    title: "car Sur",
    amount: 124.12,
    date: new Date(2024, 0, 2),
    location : 'Manhatttan',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log('in app.js');
    
    // expenses = [...expenses, expense];
    // console.log(expenses);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
