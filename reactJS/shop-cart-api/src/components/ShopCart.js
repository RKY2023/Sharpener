import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import ShopContext from "../store/ShopCTXProvider";

const ShopCart = (props) => {
    const [cartDataFb, setCartDataFb] = useState([]);
    const shopCtx = useContext(ShopContext);

    const increaseItem = (e) => {
        const key = e.target.dataset.key;
        const item = shopCtx.cartItems.filter((item) => {
            return item.id==key;
        })
        shopCtx.addItemToCart(item[0]);
    }

    const decreaseItem = (e) => {
        const key = e.target.dataset.key;
        shopCtx.removeItemToCart(key);
    }

    const getItemToFirebase = useCallback( async () => {
        let url ='https://atomic-matrix-193707-default-rtdb.firebaseio.com/shopCart.json'
        try{
            const response = await fetch(url);

            const data = await response.json();
            const cartData = data.cartItems;
            const loadedData = [];
            for(const k in cartData){
                loadedData.push({
                    id: cartData[k].id,
                    name: cartData[k].name,
                    price: cartData[k].price,
                    quantity: cartData[k].quantity,
                    totalPrice: cartData[k].totalPrice,
                    desc: cartData[k].desc,
                })
            }
            setCartDataFb(loadedData);
        } catch (err) {
            console.log(err);
        }
    },[shopCtx.totalCartItems]);

    const cartContent = cartDataFb.map((item) => (
        <Card key={item.id} className="mt-3">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>Price: {item.price} Quantity:{item.quantity} Total Price:{item.totalPrice}</Card.Subtitle>
                <Card.Text>{item.desc}</Card.Text>
                <Button onClick={increaseItem} className="p-2 mx-2" data-key={item.id}>+</Button>
                <Button onClick={decreaseItem} className="p-2 mx-2" data-key={item.id}>-</Button>
            </Card.Body>
        </Card>
    ));

    useEffect(() => {
        getItemToFirebase();
    });

    return (
        <Container>
        <h1>Your Cart [{shopCtx.totalCartItems}]</h1>
        <section>
            {cartContent}
        </section>
        </Container>
    );
};
export default ShopCart;