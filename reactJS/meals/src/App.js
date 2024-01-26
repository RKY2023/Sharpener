
import './App.css';
import Cart from './components/Cart/Cart';
import Headers from './components/Layout/Headers';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <>
      <Cart />
      <Headers/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
