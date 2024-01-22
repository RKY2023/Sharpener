import React from "react";
import Product from "./Product";
import ProductFilter from "./ProductFilter";

const productCategoryType = [
    {
        id: 'elec',
        categoryType: 'Electronic'
    },
    {
        id: 'food',
        categoryType: 'Food'
    },
    {
        id: 'skin',
        categoryType: 'Skincare'
    }
];

const ProductCategory = (props) => {
    const productCategoryListing = productCategoryType.map((category) => (
        <div key={category.id}>
            <h3>{category.categoryType} Items</h3>
            <div className='product-list'>
                <ProductFilter items={props.tt} type={category.categoryType} onDeleteProd={props.onDeleteProd} />
            </div>
        </div>
    ));

    return (
        <>        
            {productCategoryListing}
        </>
    )
};

export default ProductCategory;