import React from "react";

// import Expenses from "./components/Expenses/Expenses";
// import './components/Expenses/Expenses.css';
import ExpenseForm from "./components/Expenses/ExpenseForm";
import './components/Expenses/ExpenseForm.css';

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Lets's go</h2>
      {/* <Expenses items={expenses}/> */}
      <ExpenseForm/>
    </div>
  );
}

export default App;
