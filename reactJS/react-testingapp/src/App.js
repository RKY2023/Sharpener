import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Async />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          @testing-library/react@11
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greetings />
        
      </header>
      
    </div>
  );
}

export default App;
