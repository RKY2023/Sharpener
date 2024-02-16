import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotalItems = useSelector(state => state.cart.totalItems);

  const cartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalItems}</span>
    </button>
  );
};

export default CartButton;
