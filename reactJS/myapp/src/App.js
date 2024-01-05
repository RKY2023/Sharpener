import React from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const App = () => {
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
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
