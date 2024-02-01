import React from "react";
import classes from "./MedicineCart.module.css";

const MedicineCart = (props) => {
    return (
        <div>
            <button onClick={props.onShowModal}>Cart</button>
        </div>
    )
}

export default MedicineCart;