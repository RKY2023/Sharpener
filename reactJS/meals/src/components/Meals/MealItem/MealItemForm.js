import Input from "../../UI/Input";
import { useState } from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = props =>{
    const [mealAmount, setMealAmount] = useState(1);

    const onSubmitMealAmount = (event) => {
        event.preventDefault();
        setMealAmount(++mealAmount);
    }

    return (
        <form onSubmit={onSubmitMealAmount} className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount', 
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;