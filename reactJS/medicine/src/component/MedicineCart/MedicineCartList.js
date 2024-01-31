import React from "react";
import Modal from "../UI/Modal";

const MedicineCartList = (props) => {
    return (
        <Modal>
        Modal data...
        <button onClick={props.onHide}>Close</button>
        </Modal>
    )
}

export default MedicineCartList ;