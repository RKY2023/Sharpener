import './App.css';
import Header from './components/Layout/Header';
import AppTest from './AppTest';
import EcommerceProvider from './store/EcommerceProvider';
import { useContext, useState } from 'react';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUS from './pages/ContactUS';
import ProductDetails from './pages/ProductDetail';
import Login from './pages/Login';
import EcommerceContext from './store/EcommerceContext';


const App = (props) => {
  const authCtx = useContext(EcommerceContext);

  const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);

  // const router = createBrowserRouter([
  //   {path: '/', element: <Home />},
  //   {path: '/product', element: <Products />},
  //   {path: '/product/:productId', element: <ProductDetails />},
  //   {path: '/about', element: <AboutUs />},
  //   {path: '/login', element: <Login />},
  //   {path: '/contact', element: <ContactUS />},
  // ]);

  const [isModalShown, setIsModalShown] = useState(false);

  const showModalHandler = () => {
    setIsModalShown(true);
  }

  const hideModalHandler = () => {
    setIsModalShown(false);
  }
  
  return (
    <EcommerceProvider>
        {isModalShown && <Cart onClose={hideModalHandler} />}
        <Header onShowModal={showModalHandler}/>
        {/* <AppTest /> */}
        {/* <RouterProvider router={router} /> */}
        111-{authCtx.isLoggedIn == true ? 't':'f'}-..
        <BrowserRouter>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/product'>
            <Products />
          </Route>
          <Route path='/product/:productId'>
            <ProductDetails />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/contact'>
            <ContactUS />
          </Route>
          {/* <Route path='*'>
            <Home />
          </Route> */}
        </BrowserRouter>
    </EcommerceProvider>
  );
}

export default App;
