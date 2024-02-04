import './App.css';
import Header from './components/Layout/Header';
import AppTest from './AppTest';
import EcommerceProvider from './store/EcommerceProvider';

// import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <EcommerceProvider>
      <div className="App">
        <Header />
        <AppTest />
        {/* <Route /> */}
      </div>
    </EcommerceProvider>
  );
}

export default App;
