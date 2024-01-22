import React from "react";

import './Product.css';

const Product = (props) => {
    const productRemoveHandler = (event) => {
        let removePRoductId = event.target.parentNode.getAttribute('data-key');
        props.onDeleteProd(removePRoductId);        
    }

    const product= props.items.map((product) => (
        <li key={product.id} data-key={product.id}>
            <div>
                <div>{product.price} - {product.category} - {product.name} </div>
                <button type="submit" onClick={productRemoveHandler}>Delete</button>
            </div>
        </li>
    ));

    return (<ul>{product}</ul>);
};

export default Product;