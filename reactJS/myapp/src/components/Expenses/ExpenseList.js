import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    if( props.items.length === 0) {
       return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    const expensesContent = props.items.map( (expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));
    
    if( props.items.length === 1) {
        expensesContent.push(<h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>);
    }

    return <ul className="expenses-list">
        {expensesContent}
    </ul>
}

export default ExpenseList;