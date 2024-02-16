import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


const App = (props) => {
  const cartShown = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {cartShown && <Cart />}      
      <Products />
    </Layout>
    
  );
}

export default App;
