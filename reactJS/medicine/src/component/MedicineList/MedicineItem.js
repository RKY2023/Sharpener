import React, { useState, useContext } from "react";
import Classes from './MedicineItem.module.css';
import MedicineContext from "../../store/MedicineContext";

const MedicineItem = (props) => {
    const [billBtnisDisabled, setBillBtnDisabled] = useState(false);
    const [qtyVal, setQtyVal] = useState(1);
    const [id, setId] = useState(props.item.id);
    const [name, setName] = useState(props.item.name);
    const [desc, setDesc] = useState(props.item.desc);
    const [price, setPrice] = useState(props.item.price);
    const [quantity, setQuantity] = useState(Number(props.item.qty));
    const [availQty, setAvailQty] = useState(0);
    
    const keyId='key_'+id;
    const disabledAtrr = (billBtnisDisabled ? 'disabled':'');
    const inputId = 'item_'+id;

    const addBillHandler = () => {
        qtyChanger(qtyVal);
        const cartNewItem =  {...props.item, qty:qtyVal};
        // const newItem =  {...props.item, qty:quantity};
        console.log('add to cart',cartNewItem);
        props.addItemToCart(cartNewItem);
    }

    const qtyChanger = (billQty) => {    
        const newQty = quantity + availQty;    
        if(newQty >= billQty){
            setBillBtnDisabled(false);
            setQuantity(newQty-billQty);
            setAvailQty(billQty);
        }
        else {
            setBillBtnDisabled(true);
            setAvailQty(newQty);
            setQuantity(0);
            return;
        }
        setName(name);
        setDesc(desc);
        setPrice(price);
        setId(id);
    }

    const onQtyChange = (event) =>{
        // const timer1  = setTimeout( () => {
            const billQty = Number(event.target.value);
            setQtyVal(billQty);
            qtyChanger(billQty);
            console.log(billQty);
        // }, 500);
        // const tt = () => {
        //     clearTimeout(timer1);
        // }
        
    }

    const quantityText = quantity < 1 ? 'Out of Stock': quantity;

    return (
        <>
        <li key={keyId} className={Classes.li4}>
            <div className={Classes.text1}>
                <label>{name}</label>
                <label>{desc}</label>
                <label >{price}</label>
                <label>{quantityText}</label>
            </div>
            <div>
                <label>Qty</label>
                <input id={inputId} type="number" step="1" onChange={onQtyChange} value={qtyVal}></input>
                <button onClick={addBillHandler} disabled={disabledAtrr}>Add to bill</button>
            </div>
        </li>
        </>
    )
}

export default MedicineItem;