import React from 'react';
import Select from 'react-select';
import { useState,useContext } from 'react';
import { Context, dispatchContext } from '../Context/ContextProvider';
import { toast } from "react-toastify";


export const options = [
	{ value: 'dairy', label: 'Dairy' },
	{ value: 'nuts', label: 'Nuts' },
	{ value: 'fruitage', label: 'Fruitage' },
];


const style = {
	control: base => ({
		...base,
		border: '2px solid rgba(0, 0, 0, 0.685)',
		'&:hover': { borderColor: '#7209b7' },
		boxShadow: 'none'
	})
};


const SelectComponent = () => {

	// Destructuring State
	const {saveToShop,setSaveToShop, ...rest} = useContext(Context);
	
	// Destructuring Actions
	const {getValueHandler,addToProductsButton,selectedValueHandler,addToSelectHandler} = useContext(dispatchContext);
	// console.log(dispatch);

	// States
	const [isDisabled, setIsDisable] = useState(false);
	

	
	/** Convert To Context */
	// ===++++++++====

	// const [getValue, setGetValue] = useState({
	// 	value: '',
	// 	label: ''
	// });

	// const [saveToShop, setSaveToShop] = useState([]);
	// const [saveValue, setSaveValue] = useState({
	// 	id: 1,
	// 	category: "",
	// 	name: ""
	// });

	// const [addToProducts, setAddToProducts] = useState({});
	//  Deactive for input



	//	 Get value from click on select options
	// let filteredProducts;
	// const selectedValueHandler = (e) => {
	// 	rest.setAddToProducts({ ...rest.addToProducts, e });
	// 	filteredProducts = saveToShop.filter((p) => p.category === e.value);
	// 	getFiltered(filteredProducts);
	// }


	// Check Select Option for empty or fill
	const checkInput = (e) => {
		if (Object.keys(rest.addToProducts).length !== 0) {
			getValueHandler(e)
		}
		else {
			setIsDisable(true);
			toast.error('لطفا نام محصول را وارد کنید', { theme: "colored" });
			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		}
	}

	// // get Value for products
	// const getValueHandler = (e) => {
	// 	rest.setSaveValue(
	// 		{
	// 			...rest.saveValue,
	// 			category: rest.addToProducts.e.value,
	// 			name: e.target.value
	// 		});
	// }

	// // Add Products to useState(saveToShop)
	// const addToProductsButton = () => {
	// 	if (emptyRef.current.value === "") {
	// 		toast.warning('لطفا نام محصول را وارد کنید', { theme: "colored" })
	// 	} else {
	// 		rest.setSaveValue({
	// 			id: rest.saveValue.id + 1
	// 		});

	// 		setSaveToShop([
	// 			...saveToShop,
	// 			rest.saveValue,
	// 		]
	// 		);

	// 		emptyRef.current.value = "";
	// 		toast.success('محصول جدید اضافه شد', { theme: "colored", fontFamily: "vazir" });
	// 		localStorage.setItem('products', JSON.stringify(saveToShop));
	// 	}
	// }

	// Save & Show input value in selectOption when click button
	// const addToSelectHandler = () => {
	// 	if (inputRef.current.value === "") {
	// 		toast.warning('لطفا نام گروه را وارد کنید', { theme: "colored" })
	// 	} else {
	// 		setAddToGroup([...addToGroup, rest.getValue]);
	// 		toast.success('گروه جدید اضافه شد', { theme: "colored", fontFamily: "vazir" })
	// 		inputRef.current.value = '';
	// 	}
	// }

	// Get value for add to select option from input & store in getValue useState 
	const inputHandler = (e) => {
		rest.setGetValue({ ...rest.getValue, value: e.target.value, label: e.target.value });
	}

	
	return (
		<div className="select-icon">
			<div className="select-elements">
				<div>
					<span> نام گروه را انتخاب نمائید </span>
					<Select
						options={rest.addToGroup}
						placeholder="طبقه بندی"
						onChange={selectedValueHandler}
						styles={style}
					/>
				</div>
				<div className="input-add-group">
					<label>نام گروه جدید</label>
					<input type="text"  onChange={inputHandler}  value={rest.getValue.label}/>
					<button className="btn" onClick={addToSelectHandler}>اضافه به طبقه بندی</button>
					<div className="add-products">
						<label>نام محصول را وارد کنید</label>
						<input type="text" onChange={checkInput}  disabled={isDisabled} value={rest.saveValue.name}/>
						<button className="btn" onClick={addToProductsButton} >اضافه به محصولات </button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectComponent;