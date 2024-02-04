import './App.css';
import Header from './components/Layout/Header';
import AppTest from './AppTest';
import EcommerceProvider from './store/EcommerceProvider';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUS from './pages/ContactUS';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/products', element: <Products />},
  {path: '/about', element: <AboutUs />},
  {path: '/contact', element: <ContactUS />},
])

const App = (props) => {
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
        <RouterProvider router={router} />
    </EcommerceProvider>
  );
}

export default App;
