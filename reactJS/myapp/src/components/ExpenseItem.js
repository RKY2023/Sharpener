import React from 'react';
import ExpenseDate  from './ExpenseDate';

import './ExpenseItem.css';


function ExpenseItem(props){
    // const LocationOfExpenditure = 'manhattan';

    // return <h2>Expense item 1</h2>

    // 
    return React.createElement(
        'div',
        { className: 'expense-item'},
        React.createElement(ExpenseItem,{ date: props.date}),
        React.createElement('div',{},
        React.createElement('h1',{},'Expense 1'),
        React.createElement('h1',{},'Expense 1'),
        ),
    )
}
export default ExpenseItem;