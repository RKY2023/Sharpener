import React, { useContext, useState } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import EcommerceContext from "../store/EcommerceContext";

const Products = (props) => {
    const productsArr = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ];

    const ecommerceCtx = useContext(EcommerceContext);
    // const [itemId, setItemId] = useState(1);

    const addToCartHandler = (event) => {
        // setItemId(event.target.getAttribute('id'));
        const itemId = event.target.getAttribute('id');
        const item = productsArr.filter( (item) => {
            return item.id == itemId;
        })
        console.log(item);
        ecommerceCtx.addToCart(...item);
    }
    
    const itemContent = productsArr.map( (item) => (
        <Card className="m-3 p-3 col-6 ">
            <Card.Title className="text-center"><Link to={`/product/p${item.id}`} className=" text-decoration-none">{item.title}</Link></Card.Title>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Text>{item.price}</Card.Text>
            <Button id={item.id} variant="primary" onClick={addToCartHandler}>
                Add
            </Button>
        </Card>
    ));

    return (
        <>
        <Container className="flex felx wrap">
            {itemContent}              
        </Container>
        </>
    );
};

export default Products;