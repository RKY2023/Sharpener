import React, { useState, useContext } from "react";
import Classes from './MedicineItem.module.css';
import MedicineContext from "../../store/MedicineContext";

const MedicineItem = (props) => {
    const medicineListCtx = useContext(MedicineContext);
    const [billBtnisDisabled, setBillBtnDisabled] = useState(false);
    const [qtyVal, setQtyVal] = useState('1');
    const [quantity, setQuantity] = useState(props.item.qty);
    

    const disabledAtrr = (billBtnisDisabled ? 'disabled':'');
    const inputId = 'item_'+props.item.id;

    const addBillHandler = () => {

        const inpQty = document.getElementById(inputId).value;

        const cartNewItem =  {...props.item, qty:inpQty};
        const newItem =  {...props.item, qty:quantity};
        medicineListCtx.addItemToCart(cartNewItem);
    }

    const onQtyChange = (event) =>{
        const stockQty = isNaN(quantity) ? 0: quantity;
        const billQty = Number(event.target.value);
        setQtyVal(billQty);
        if(props.item.qty >= billQty){
            setBillBtnDisabled(false);
            setQuantity(stockQty-billQty);
        }
        else {
            setBillBtnDisabled(true);
            setQuantity('Out of Stock');
        }
            
    }

    

    return (
        <li>
            <div className={Classes.text1}>
                <label>{props.item.name}</label>
                <label>{props.item.desc}</label>
                <label >{props.item.price}</label>
                <label>{quantity}</label>
            </div>
            <div>
                <label>Qty</label>
                <input id={inputId} type="number" minValue="1" step="1" onChange={onQtyChange} value={qtyVal}></input>
                <button onClick={addBillHandler} disabled={disabledAtrr}>Add to bill</button>
            </div>
        </li>
    )
}

export default MedicineItem;