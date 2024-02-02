import './App.css';
import Header from './components/Layout/Header';
import AppTest from './AppTest';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <AppTest />
      <Route />
    </div>
  );
}

export default App;
