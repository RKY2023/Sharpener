import React from "react";

import ExpenseItem from "./components/ExpenseItem";

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
    <div className="App">
      <header className="App-header">
          <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
            LocationOfExpenditure={expenses[0].location}
          />
          <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
            LocationOfExpenditure={expenses[1].location}
          />
      </header>
    </div>
  );
}

export default App;
