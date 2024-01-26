
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Headers from './components/Layout/Headers';
import Meals from './components/Meals/Meals';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Headers onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
