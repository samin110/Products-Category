import React, { useState, createContext, useReducer } from "react";
import { toast } from "react-toastify";
import { options } from "../Components/SelectComponent";

export const Context = createContext();
export const dispatchContext = createContext();

function ContextProvider({ children }) {
  // ====== States =======
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [saveToShop, setSaveToShop] = useState([]);
  const [addToGroup, setAddToGroup] = useState(options);
  const [getValue, setGetValue] = useState({
    value: "",
    label: "",
  });
  const [saveValue, setSaveValue] = useState({
    id: 1,
    category: "",
    name: "",
  });

  // =====  Actions ======

  // get Value for products
  const getValueHandler = (e) => {
    setSaveValue({
      ...saveValue,
      category: addToProducts.e.value,
      name: e.target.value,
    });
  };

  // Add Products to useState(saveToShop)
  const addToProductsButton = () => {
    if (saveValue.name === "") {
      toast.warning("لطفا نام محصول را وارد کنید", { theme: "colored" });
    } else {
      setSaveValue({
        id: saveValue.id + 1,
      });

      setSaveToShop([...saveToShop, saveValue]);

      toast.success("محصول جدید اضافه شد", {
        theme: "colored",
        fontFamily: "vazir",
      });
      localStorage.setItem("products", JSON.stringify(saveToShop));
    }
    setSaveValue({ category: "", name: "" });
  };

  //	 Get value from click on select options
  let filteredProduct;
  const selectedValueHandler = (e) => {
    setAddToProducts({ ...addToProducts, e });
    filteredProduct = saveToShop.filter((p) => p.category === e.value);
    getFiltered(filteredProduct);
  };

  const addToSelectHandler = () => {
    if (getValue.value === "") {
      toast.warning("لطفا نام گروه را وارد کنید", { theme: "colored" });
    } else {
      setAddToGroup([...addToGroup, getValue]);
      toast.success("گروه جدید اضافه شد", {
        theme: "colored",
        fontFamily: "vazir",
      });
    }
    setGetValue({ value: "", label: "" });
  };

  const getFiltered = (e) => {
    setFilteredProducts(e);
  };

  const [addToProducts, setAddToProducts] = useState({});
  return (
    <Context.Provider
      value={{
        saveToShop,
        setSaveToShop,
        getValue,
        setGetValue,
        saveValue,
        setSaveValue,
        addToProducts,
        setAddToProducts,
        filteredProducts,
        addToGroup,
      }}
    >
      <dispatchContext.Provider
        value={{
          getValueHandler,
          addToProductsButton,
          selectedValueHandler,
          getFiltered,
          addToSelectHandler,
        }}
      >
        {children}
      </dispatchContext.Provider>
    </Context.Provider>
  );
}

export default ContextProvider;
