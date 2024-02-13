import './App.css';
import { React, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import AuthPg from './pages/AuthPg';
import Expense from './components/Expense/Expense';
import ExpenseContext from './store/ExpenseContext';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './components/Profile/Profile';

const App = (props) => {
  const authCtx = useContext(ExpenseContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);
  return (
    <>
    {!(isLoggedIn) && (
      <Switch>
        <Route path='/auth' index exact>
          <AuthPg />
        </Route>
        <Route path='/forgotPassword'>
          <ForgotPassword />
        </Route>
      </Switch>
    )}
    {(isLoggedIn) && (
        <Switch>
          <Route path='/' exact>
            <HomePg />
          </Route>
          <Route path='/auth'>
            <AuthPg />
          </Route>
          <Route path='/forgotPassword'>
            <ForgotPassword />
          </Route>
          <Route path='/home'>
            <HomePg />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/expense'>
            <Expense />
          </Route>
        </Switch>
    )}
    </>
  );
};

export default App;
