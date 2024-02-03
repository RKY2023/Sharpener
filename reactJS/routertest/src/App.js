import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Products from './pages/Product';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Route path='/Welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
