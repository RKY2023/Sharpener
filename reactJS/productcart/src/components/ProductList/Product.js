import React from "react";

const Product = (props) => {
    const product= props.items.map((product) => (
        <div >
            <div>{product.price} - {product.category} - {product.name} </div>
            <button type="submit"  onClick={props.onDeleteProd}>Delete</button>
        </div>
    ));

    return product;
};

export default Product;