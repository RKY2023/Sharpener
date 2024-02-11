import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import AuthPg from './pages/AuthPg';
import Expense from './components/Expense/Expense';

const App = (props) => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPg />} />
        <Route path='/' element={HomePg} exact />
        <Route path='/profile' element={Expense} exact />
        <Route path='/auth' element={AuthPg} />
        <Route path='*' element={HomePg} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
