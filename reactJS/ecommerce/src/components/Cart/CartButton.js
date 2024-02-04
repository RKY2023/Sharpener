import React, { useContext, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import EcommerceContext from "../../store/EcommerceContext";

const CartButton = (props) =>{
    const ecommerceCtx = useContext(EcommerceContext);

    return (
        <Button variant="warning btn-sm" onClick={props.onShowModal}>
            <span className="px-1">Cart</span>
            <Badge variant="sm">
                {ecommerceCtx.totalItems}
            </Badge>
        </Button>
    )
}

export default CartButton;