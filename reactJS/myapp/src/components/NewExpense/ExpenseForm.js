import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState(0);
    const getTitle = (event) => {
        let title_val = event.target.value;
        setTitle(title_val)
        console.log(title_val);
    }
    const addExpense = (event) => {
        setEnteredAmount(event.target.value)
        console.log(event.target.value);
    }
    const titleChangeHandler = (event) =>{
        // setTitle(event.target.value)
        console.log(event.target.value);
        console.log(event.target.value);
    }
    return (
        <form>
            <div className="expense-form__controls">
                <div className="expense-form__control">
                    <label>Title</label>
                    <input id="titleVal" onChange={titleChangeHandler} type="text"></input>
                </div>
                <div className="expense-form__control">
                    <label>Amount</label>
                    <input onChange={addExpense} type="number" min="0.01" step="0.01"></input>
                </div>
                <div className="expense-form__control">
                    <label>Date</label>
                    <input onChange={addExpense} type="date" min="2000-01-01" max="3000-01-01"></input>
                </div>
            </div>
            <div>
                <div>Title: {title}</div>
                <div>Amount: {EnteredAmount}</div>
            </div>
            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm;