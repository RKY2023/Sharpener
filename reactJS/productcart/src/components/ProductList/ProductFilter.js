import React, { useState } from "react";
import Product from "./Product";

const ProductFilter = (props) => {
    const [categoryType, setCategory] = useState(props.type);
    
    const products = props.items.filter((product) => {
        return product.category === categoryType;
    });
    
    return (
       <Product items={products} onDeleteProd={props.onDeleteProd} />
    )
} 

export default ProductFilter;