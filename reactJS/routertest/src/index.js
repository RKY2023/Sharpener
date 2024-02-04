// // import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// // import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Switch, Redirect  } from 'react-router-dom';
// import './index.css';
import Welcome from './pages/Welcome';
import Products from './pages/Product';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetail from './pages/ProductDetail';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
        {/* <Redirect to='/main' /> */}
      {/* </Route> */}

      <Route path='/main' element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/products" exact element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
  , rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
