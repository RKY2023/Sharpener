import React from "react";
import classes from "./MedicineCart.module.css";

const MedicineCart = (props) => {
    const showCartModalHandler = (props) =>{

    }
    return (
        <div>
            <button onClick={props.onShowModal}>Cart</button>
        </div>
    )
}

export default MedicineCart;