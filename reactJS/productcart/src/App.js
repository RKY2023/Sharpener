import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';

const dummy_init = [
  {
    id: '1',
    name: 'Iron',
    category: 'Electronic',
    price: 2600,
  },
  {
    id: '2',
    name: 'Paneer readymade',
    category: 'Food',
    price: 600,
  },
  {
    id: '3',
    name: 'Mobile',
    category: 'Electronic',
    price: 22000,
  },
  {
    id: '4',
    name: 'Cashew',
    category: 'Food',
    price: 1300,
  },{
    id: '5',
    name: 'Badam',
    category: 'Food',
    price: 1200,
  },
  {
    id: '6',
    name: 'Rice',
    category: 'Food',
    price: 468,
  },{
    id: '7',
    name: 'iPhone',
    category: 'Electronic',
    price: 200000,
  },
  {
    id: '8',
    name: 'Lipstick',
    category: 'Skincare',
    price: 300,
  }
]

const App = (props) => {
  const [productData, setProductData] = useState(dummy_init);

  const onSaveProductHandler = (product) => {
    setProductData(prevProducts => {
      return [product, ...prevProducts]
    })
    localStorage.setItem(product.id,JSON.stringify(product));
  };

  const deleteProductHandler = productId => {
    setProductData(prevProducts => {
      const newProductData = prevProducts.filter(product => product.id !== productId);
      return newProductData;
    });
    localStorage.removeItem(productId);
  };


  return (
    <div className="App">
      <ProductForm onSaveProduct={onSaveProductHandler}/>
      <ProductList items={productData} onDeleteProd={deleteProductHandler}></ProductList>
    </div>
  );
}

export default App;
