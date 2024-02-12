import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import AuthPg from './pages/AuthPg';
import Expense from './components/Expense/Expense';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
      <Route index path='/'>
          <HomePg />
        </Route>
        <Route path='/auth'>
          <AuthPg />
        </Route>
        <Route path='/home'>
          <HomePg />
        </Route>
        <Route path='/expense'>
          <Expense />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
