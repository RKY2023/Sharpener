import React, { useContext } from "react";
import Modal from "../UI/Modal";
import MedicineContext from "../../store/MedicineContext";

const MedicineCartList = (props) => {
    const medicineCtx = useContext(MedicineContext);

    const medicineList = medicineCtx.cartItems.map( (item) => (
        <li>{item.name} QTY: {item.qty}</li>
    ))

    return (
        <Modal>
        {medicineList}
        <button onClick={props.onHide}>Close</button>
        </Modal>
    )
}

export default MedicineCartList ;