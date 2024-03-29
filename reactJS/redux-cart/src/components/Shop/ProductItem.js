import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartReducer';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const productAddCartHandler = () => {
    const productItem = {
      id: id,
      title: title,
      price: price,
      description: description,
    }
    dispatch(cartActions.addTocart(productItem));
    console.log(productItem);
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={productAddCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
