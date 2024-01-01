import ExpenseDate  from './ExpenseDate';

import './ExpenseItem.css';


function ExpenseItem(props){
    const LocationOfExpenditure = 'manhattan';

    // return <h2>Expense item 1</h2>
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}
                <div className='expense-item__description'>{LocationOfExpenditure}</div>
                </h2>
                
                <div className='expense-item__price'>${props.amount}</div>    
            </div>
        </div>
    );
}

export default ExpenseItem;