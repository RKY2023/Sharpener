import React from "react";

const Product = (props) => {
    const productRemoveHandler = (event) => {
        let removePRoductId = event.target.parentNode.getAttribute('data-key');
        props.onDeleteProd(removePRoductId);        
    }

    const product= props.items.map((product) => (
        <div key={product.id} data-key={product.id}>
            <div>{product.price} - {product.category} - {product.name} </div>
            <button type="submit" onClick={productRemoveHandler}>Delete</button>
        </div>
    ));

    return product;
};

export default Product;