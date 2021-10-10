import './App.css';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import SelectComponent from './Components/SelectComponent';
import AddToProducts from './Components/AddToProducts';

function App() {
  const [addToProducts, setAddToProducts] = useState({});

  //		Get value from click on select options


  const selectedValueHandler = (e) => {
    setAddToProducts({ ...addToProducts, e })
  }


  return (
    <div className="App">
      <h1>طبقه بندی محصولات فروشگاه</h1>
      <SelectComponent selectedValueHandler={selectedValueHandler} getGroupName={addToProducts} />
      <ToastContainer position="top-left" rtl={true} />
    </div>
  );
}

export default App;
