import React, { useContext } from "react";
// import Input from "../UI/Input";
import MedicineItem from "./MedicineItem";
import MedicineContext from "../../store/MedicineContext";

const MedicineList = (props) => {
    const medicineListCtx = useContext(MedicineContext);
    // console.log('list',medicineListCtx);

    const medicineItemDiv = medicineListCtx.items.map(element => (
        <MedicineItem item={element} addItemToCart={medicineListCtx.addItemToCart}/>
    ));

    return (
        <ul className="margin: 1rem auto">
            {medicineItemDiv}
        </ul>
    )
}

export default MedicineList;