import "./App.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import SelectComponent from "./Components/SelectComponent";
import ShowProducts from "./Components/ShowProducts";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1>طبقه بندی محصولات فروشگاه</h1>
        <ToastContainer position="top-left" rtl={true} autoClose={2000} />
        <div className="left-component">
          <SelectComponent />
        </div>
        <div className="right-component">
          <ShowProducts />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
