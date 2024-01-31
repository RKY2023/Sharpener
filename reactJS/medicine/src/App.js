import React, { useState } from "react";
import './App.css';
import MedicineForm from './component/MedicineForm/MedicineForm';
import MedicineList from './component/MedicineList/MedicineList';
import MedicineCartList from './component/MedicineCart/MedicineCartList';
import MedicineProvider from "./store/MedicineProvider";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
    console.log('modal open')
  }

  const hideModalHandler = () => {
    setModalIsShown(false);
    console.log('modal close')
  }

  return (
    <MedicineProvider>
    {modalIsShown && <MedicineCartList onHide={hideModalHandler}/>}
    <div className="App">
      <MedicineForm onShowModal={showModalHandler} onHide={hideModalHandler}/>
      <MedicineList />
    </div>
    </MedicineProvider>
  );
}

export default App;
