import React from "react";

import ProductCategory from "./ProductCategory";

const ProductList = (props) => {
    return (
        <>
            <div className='product-listing'>
                <div className=''>
                <h2>Products</h2>
                </div>
                <div className='products'>
                <ProductCategory tt={props.items} onDeleteProd={props.onDeleteProd}></ProductCategory>
                </div>
            </div>
        </>
    )
};

export default ProductList;