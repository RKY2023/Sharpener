import React, { useState } from "react";

import './ExpenseForm.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const getTitle = () => {
        let title_val = document.getElementById('titleVal').value;
        setTitle(title_val)
        console.log(title_val);
    }
    const addExpense = () => {
        let amount_val = document.getElementById('amountVal').value;
        setTitle(amount_val)
        console.log(amount_val);
    }
    const titleChangeHandler = (event) =>{
        // setTitle(event.target.value)
        console.log(event.target.value);
        console.log(event.target.value);
    }
    return (
        <Card className="expenses">
            <h1>Expense Form</h1>
            <div className="expense-form__main">
                <div className="expense-form__controls">
                    <h3>Enter Title</h3>
                    <input id="titleVal" onChange={titleChangeHandler} type="text"></input>
                </div>
                <div className="expense-form__controls">
                    <h3>Enter Amount</h3>
                    <input id="amountVal" onChange={addExpense} type="number"></input>
                
                </div>
                <div className="expense-form__controls">
                    <h3>Enter Date</h3>
                    <input id="tt" onChange={addExpense} type="date"></input>
                </div>
            </div>
            <div>
                <div>Title: {title}</div>
                <div>Amount: {amount}</div>
            </div>
            <button onClick={addExpense}>Add</button>
        </Card>
    )
}

export default ExpenseForm;