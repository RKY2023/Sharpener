import Input from "../../UI/Input";
import { useContext, useState } from "react";
import classes from './MealItemForm.module.css';
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) =>{
    // console.log(props.item);
    const [mealAmount, setMealAmount] = useState(1);
    const cartCxt = useContext(CartContext) ;

    const addItemToCart =  (event) =>{
        event.preventDefault();
        // update cart items
        // cartCxt.items.push(props.item);
        const quantity = document.getElementById('amount_' + props.id).value;

        cartCxt.addItem({...props.item, quantity: quantity});
        // setMealAmount(++mealAmount);
        console.log(cartCxt);
    }

    return (
        <form onSubmit={addItemToCart} className={classes.form}>
            {/* {console.log(
                cartCxt.items
            )} */}
            <Input label="Amount" input={{
                id: 'amount_'+props.id, 
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