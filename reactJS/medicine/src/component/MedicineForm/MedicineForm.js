import React from "react";
import Input from "../UI/Input";
import classes from "./MedicineForm.module.css";
import MedicineCart from "../MedicineCart/MedicineCart";

const MedicineForm = (props) => {
    return (
        <>
        <form>
            <div>
                <label>Medicine Name</label>
                <Input type="text" value=""/>
            </div>
            <div>
                <label>Description</label>
                <Input type="text" value=""/>
            </div>
            <div>
                <label>Price</label>
                <Input type="number" value=""/>
            </div>
            <div>
                <label>Quantity</label>
                <Input type="number" value=""/>
            </div>
            <button>Add</button>
        </form>
        <MedicineCart onShowModal={props.onShowModal}/>
        </>
    )
}

export default MedicineForm;