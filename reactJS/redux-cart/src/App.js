import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

const App = (props) => {
  const dispatch =useDispatch();
  const cartShown = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch]);
  useEffect(()=>{
    // const sendCartData = async () => {
    //   dispatch(uiActions.showNotification({
    //     status: 'pending',
    //     title: 'sending...',
    //     message: 'Sending cart data!',
    //   }));

    //   const response = await fetch('https://atomic-matrix-193707-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   });

    //   if(!response.ok){
    //     throw new Error('Sending cart data failed.');
    //   }
    //   const data = await response.json();

    //   dispatch(uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Sent cart data succesfully!',
    //   }));
    // };

    // if(isInitial){
    //   isInitial = false;
    //   return;
    // }

    // sendCartData().catch(error => {
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!',
    //   }));
    // })

    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  },[cart, dispatch]);

  console.log(notification);

  return (
    <>
    {/* <Notification title='sdasd' message='sdasd'/> */}
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {cartShown && <Cart />}      
      <Products />
    </Layout>
    </>
  );
}

export default App;
