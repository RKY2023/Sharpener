import './App.css';
import { React, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import AuthPg from './pages/AuthPg';
import Expense from './components/Expense/Expense';
import Layout from './components/Layout/Layout';
import ExpenseContext from './store/ExpenseContext';

const App = (props) => {
  const authCtx = useContext(ExpenseContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authCtx.isLoggedIn);
  return (
    <>
    {!(isLoggedIn) && (
      <AuthPg />
    )}
    {(isLoggedIn) && (
      <Layout>
        <Switch>
          <Route path='/'>
            {/* <HomePg /> */}
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
      </Layout>
    )}
    </>
  );
};

export default App;
