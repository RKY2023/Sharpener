import React, { useState, useContext } from "react";
// import Input from "../UI/Input";
import classes from "./MedicineForm.module.css";
import MedicineCart from "../MedicineCart/MedicineCart";
import MedicineContext from "../../store/MedicineContext";

const MedicineForm = (props) => {
    const medicineCtx = useContext(MedicineContext);
    // console.log(medicineCtx);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    
    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    }
    
    const quantityChangeHandler = (event) => {
        setQuantity(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const medicine = {
            id: Math.random().toString(),
            name: name,
            desc: desc,
            price: price,
            qty: quantity,
        };
        medicineCtx.addMedicine(medicine);
        // console.log(medicineCtx);
        setName('');
        setDesc('');
        setPrice('');
        setQuantity('');
    }

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Medicine Name</label>
                <input type="text" onChange={nameChangeHandler} value={name}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={descChangeHandler} value={desc}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={priceChangeHandler} value={price}/>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" onChange={quantityChangeHandler} value={quantity}/>
            </div>
            <button>Add</button>
        </form>
        <MedicineCart onShowModal={props.onShowModal}/>
        </>
    )
}

export default MedicineForm;