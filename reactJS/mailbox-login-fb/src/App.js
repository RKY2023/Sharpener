import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

const App = (props) => {
  return (
    <>
        <Switch>
        <Route path='/' index exact>
            <Auth />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
        </Switch>
    </>
  );
}

export default App;
