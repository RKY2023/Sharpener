import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import EcommerceContext from '../store/EcommerceContext';
import { Card, Container, Row } from 'react-bootstrap';

const ProductDetail = (props) => {
    const param = useParams();
    const ecommerceCtx = useContext(EcommerceContext);
    const productDetailData = ecommerceCtx.productArr.filter( (product) => {
        const productID = (param.productId).replace('p','');
        return product.id == productID;
    });
    console.log(productDetailData);

    return (
    <>
    <h1>Product Detail</h1>
    {/* <div>{param.productId}</div> */}
    <Container>
        <Row className='col-3'>
            <Card>
                <Card.Title>{productDetailData[0].title}</Card.Title>
                <Card.Img src={productDetailData[0].imageUrl} />
                <Card.Subtitle>Reviews</Card.Subtitle>
                <Card.Text className='text-bg-warning'>adasasasasasasas</Card.Text>
            </Card>
        </Row>
    </Container>
    </>
    );
};

export default ProductDetail;