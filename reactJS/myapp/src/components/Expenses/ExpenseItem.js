import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';


function ExpenseItem(props){
    const deleteExpense = () => {
        console.log('CLick!!');
        // let amt  = this.querySelector('.amount').innerHTML;
        // let amt  = this.innerHTML;
        // var tt = amt;
        // console.log(amt);
        // // this.parentNode.removeChild(product_elem);
    }

    // return <h2>Expense item 1</h2>
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}
                <div className='expense-item__description'>{props.LocationOfExpenditure}</div>
                </h2>
                <div className='expense-item__price'>${props.amount}</div>    
                <button onClick={deleteExpense}> delete</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;