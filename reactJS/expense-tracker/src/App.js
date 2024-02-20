import './App.css';
import { React, useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import AuthPg from './pages/AuthPg';
import Expense from './components/Expense/Expense';
import ExpenseContext from './store/ExpenseContext';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/AuthReducer';
import { expenseActions } from './store/ExpenseReducer';
import { Button } from 'react-bootstrap';

const App = (props) => {
  const dispatch = useDispatch();
  const isPremiumActive = useSelector(state => state.expense.isActivatePremium);
  const authCtx = useContext(ExpenseContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const toggleThemeHandler = () =>{
    dispatch(expenseActions.toggleTheme());
  }

  useEffect(() => {
    console.log('checking Login Status');
    dispatch(authActions.checkLoginStatus());
    dispatch(expenseActions.setTheme());
  },[]);

  return (
    <>
    <p>Authenticated: {isAuthenticated? 'True':'False'} State</p>
    {isPremiumActive && <Button onClick={toggleThemeHandler}>Change theme</Button>}
    {!(isAuthenticated) && (
      <Switch>
        LogOUT
        <Route path='/' index exact>
          <AuthPg />
        </Route>
        <Route path='/auth' exact>
          <AuthPg />
        </Route>
        <Route path='/forgotPassword'>
          <ForgotPassword />
        </Route>
        <Route path='*' >
          <AuthPg />
        </Route>
      </Switch>
    )}
    <p>Middle Man</p>
    
    {(isAuthenticated) && (
        <Switch>
          LogIN
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
