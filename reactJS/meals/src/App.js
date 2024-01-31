
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Headers from './components/Layout/Headers';
import Meals from './components/Meals/Meals';
import CartProvider from './store/cartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Headers onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
