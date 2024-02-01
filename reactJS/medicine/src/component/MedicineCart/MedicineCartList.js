import React, { useContext } from "react";
import Modal from "../UI/Modal";
import MedicineContext from "../../store/MedicineContext";
import classes from './MedicineCartList.module.css';

const MedicineCartList = (props) => {
    const medicineCtx = useContext(MedicineContext);

    const medicineList = medicineCtx.cartItems.map( (item) => (
        <li className={classes.li2}>
            <div className={classes.name}>
                {item.name}
            </div>
            <div className={classes.qty}>QTY: {item.qty}</div>
        </li>
    ))

    return (
        <Modal>
            <div className={classes.flex1}>
                <ul className={classes.ul2}>
                {medicineList}
                </ul>
            <button className={classes.button2} onClick={props.onHide}>Close</button>
            </div>
        </Modal>
    )
}

export default MedicineCartList ;