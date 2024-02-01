import React, { useState, useContext } from "react";
import Classes from './MedicineItem.module.css';
import MedicineContext from "../../store/MedicineContext";

const MedicineItem = (props) => {
    const medicineListCtx = useContext(MedicineContext);
    const [billBtnisDisabled, setBillBtnDisabled] = useState(false);
    const [qtyVal, setQtyVal] = useState('1');
    const [id, setId] = useState(props.item.id);
    const [name, setName] = useState(props.item.name);
    const [desc, setDesc] = useState(props.item.desc);
    const [price, setPrice] = useState(props.item.price);
    const [quantity, setQuantity] = useState(props.item.qty);
    
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
        const stockQty = isNaN(quantity) ? 0: quantity;
        setQtyVal(billQty);
        if(props.item.qty >= billQty){
            setBillBtnDisabled(false);
            setQuantity(stockQty-billQty);
        }
        else {
            setBillBtnDisabled(true);
            setQuantity('Out of Stock');
            return;
        }
        setName(name);
        setDesc(desc);
        setPrice(price);
        setId(id);
    }

    const onQtyChange = (event) =>{
        const billQty = Number(event.target.value);
        setQtyVal(billQty);
        qtyChanger(billQty);
    }



    return (
        <>
        <li key={keyId} className={Classes.li4}>
            <div className={Classes.text1}>
                <label>{name}</label>
                <label>{desc}</label>
                <label >{price}</label>
                <label>{quantity}</label>
            </div>
            <div>
                <label>Qty</label>
                <input id={inputId} type="number" minValue="1" step="1" onChange={onQtyChange} value={qtyVal}></input>
                <button onClick={addBillHandler} disabled={disabledAtrr}>Add to bill</button>
            </div>
        </li>
        </>
    )
}

export default MedicineItem;