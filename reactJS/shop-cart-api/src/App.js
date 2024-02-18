import logo from './logo.svg';
import './App.css';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';
import ShopCart from './components/ShopCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {  } from 'react-router-dom/cjs/react-router-dom.min';

const App = (props) => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' index exact>
          <ShopForm />
        </Route>
        <Route path='/cart'>
          <ShopCart />   
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
