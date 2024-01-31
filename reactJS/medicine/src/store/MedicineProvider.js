import React from "react";
import MedicineContext from "./MedicineContext";

const MedicineProvider = (props) => {
    const MedicineCtx = useContext(MedicineContext);
    
    const [items, setItems] = useState([]);

    const addMedicineHandler = (item) =>{
        setItems[{...items, item}];
    }
    const useMedicineCtx = [{
        items: items,
        totalAmount: 0,
        addMedicine: addMedicineHandler,
    }]
    

    return (
        <MedicineContext.Provider value={useMedicineCtx}>
            {props.children}
        </MedicineContext.Provider>
    )
}

export default MedicineProvider;