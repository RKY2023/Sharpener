import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCxt = useContext(CartContext);
    // console.log('Cart:',cartCxt);
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCxt.items.map((item) => (
                <li key={item.id}>{item.name} Price:{item.price} quantity:{item.quantity}</li>
            ))}
        </ul>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;