import React, { useContext, useState } from "react";
import Modal from "../Modal.js/Modal";
import EcommerceContext from "../../store/EcommerceContext";

const Cart = (props) =>{
    const ecommerceCtx = useContext(EcommerceContext);
    // const [cartContent, setCartContent] = useState('');
    console.log(ecommerceCtx.items);

    const cartContent = ecommerceCtx.items.map( (item) =>{
        <section>
            <div>{item.title}</div>
        </section>
    })

    const cartItems = (
        <ul className="">
            {ecommerceCtx.items.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            <h2>Items on your Cart</h2>
            <div>{cartItems}</div>
        </Modal>
    );
};

export default Cart;