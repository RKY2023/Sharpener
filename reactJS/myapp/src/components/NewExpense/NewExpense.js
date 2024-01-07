import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(0);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(0);
    };
    
    const openAddExpense = (event) => {
        event.preventDefault();
        setShowForm(1);
    };

    if(showForm == 1)
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
    );

    return (
        <div className="new-expense">
            <button type="submit" onClick={openAddExpense}>Add New Expense</button>
        </div>
    )
    
};

export default NewExpense;