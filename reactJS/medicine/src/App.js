import React, { useState } from "react";
import './App.css';
import MedicineForm from './component/MedicineForm/MedicineForm';
import MedicineList from './component/MedicineList/MedicineList';
import MedicineCartList from './component/MedicineCart/MedicineCartList';
import MedicineProvider from "./store/MedicineProvider";
import Header from "./component/Layout/Header";

const App = (props) => {
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
    <Header onShowModal={showModalHandler} onHide={hideModalHandler}/>
    <div className="App">
      <MedicineForm />
      <MedicineList />
    </div>
    </MedicineProvider>
  );
}

export default App;
