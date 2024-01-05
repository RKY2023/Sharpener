import React, { useState} from 'react';

import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    // special fn only called here
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    // console.log(ss);

    const deleteExpense = () => {
        console.log('CLick!!');
        // let amt  = this.querySelector('.amount').innerHTML;
        // let amt  = this.innerHTML;
        // var tt = amt;
        // console.log(amt);
        // // this.parentNode.removeChild(product_elem);
    };
    const clickHandler = () => {
        setTitle('Update!');
        console.log(title);
    };
    const clickHandler2 = () => {
        let v  =document.getElementsByTagName('h2');
        v[1].innerHTML = 'UPdateee';
        console.log(title);
    };
    const clickHandler3 = () => {
        setAmount(100);
        console.log(title);
    };


    // return <h2>Expense item 1</h2>
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__description'>{props.LocationOfExpenditure}</div>
                <div className='expense-item__price'>${amount}</div>    
                <button onClick={deleteExpense}> delete</button>
            </div>
            <button onClick={clickHandler3}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;