import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import MailBox from './components/MailBox/MailBox';

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
          <Route path='/mail'>
            <MailBox />
          </Route>
        </Switch>
    </>
  );
}

export default App;
