import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    const params = useParams();

    console.log(params);

    return (
        <section>
        <h1>ProductDetail</h1>
        <p>{params.productId}</p>
        </section>
        
    );
};

export default ProductDetail;