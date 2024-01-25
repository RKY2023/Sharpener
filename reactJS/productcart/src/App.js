import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';

const dummy_init = []

const App = (props) => {
  const [productData, setProductData] = useState(dummy_init);

  const onSaveProductHandler = (product) => {
    setProductData(prevProducts => {
      return [product, ...prevProducts]
    })
    localStorage.setItem(product.id,JSON.stringify(product));
  };

  const onDeleteProductHandler = productId => {
    setProductData(prevProducts => {
      const newProductData = prevProducts.filter(product => product.id !== productId);
      return newProductData;
    });
    localStorage.removeItem(productId);
  };


  return (
    <div className="App">
      <ProductForm onSaveProduct={onSaveProductHandler}/>
      <ProductList items={productData} onDeleteProd={onDeleteProductHandler}></ProductList>
    </div>
  );
}

export default App;
