import './App.css';
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import SelectComponent from './Components/SelectComponent';
import ShowProducts from './Components/ShowProducts';

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getFiltered = (e) => {
    setFilteredProducts(e);
  }

  return (
    <div className="App">
      <h1>طبقه بندی محصولات فروشگاه</h1>
      <ToastContainer position="top-left" rtl={true} autoClose={2000} />
      <div className="left-component">
        <SelectComponent getFiltered={getFiltered} />
      </div>
      <div className="right-component">
        <ShowProducts filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
