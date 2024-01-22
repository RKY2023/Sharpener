import React, { useState } from "react";

import './ProductForm.css';

const ProductForm = (props) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState("Electronic");

  const idChangeHandler = (event) => {
    setProductId(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setProductName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };
  const productChangeHandler = (event) => {
    setProductCategory(event.target.value);
  };

  const onSubmitProductFormHandler = (event) => {
    event.preventDefault();
    const productItems = {
      id: Math.random().toString(),
      name: productName,
      price: productPrice,
      category: productCategory,
    };

    props.onSaveProduct(productItems);
    setProductId('');
    setProductName('');
    setProductPrice('');
    setProductCategory("Electronic");
  };

  return (
    <form onSubmit={onSubmitProductFormHandler}>
      <div>
        <label>id</label>
        <input type="text" value={productId} onChange={idChangeHandler}></input>
      </div>
      <div>
        <label>Product Name</label>
        <input type="text" value={productName} onChange={nameChangeHandler}></input>
      </div>
      <div>
        <label>Product Price</label>
        <input type="number" value={productPrice} onChange={priceChangeHandler}></input>
      </div>
      <div>
        <label>Product Category</label>
        <select onSelect={productCategory} onChange={productChangeHandler}>
          <option value="Electronic">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
