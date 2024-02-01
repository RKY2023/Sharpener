import React, { useContext } from "react";
// import Input from "../UI/Input";
import MedicineItem from "./MedicineItem";
import MedicineContext from "../../store/MedicineContext";

const MedicineList = (props) => {
    const medicineListCtx = useContext(MedicineContext);
    // console.log('list',medicineListCtx);

    const medicineItemDiv = medicineListCtx.items.map(element => (
        <MedicineItem  key={element.id} item={element} />
    ));

    return (
        <ul>
            {medicineItemDiv}
        </ul>
    )
}

export default MedicineList;