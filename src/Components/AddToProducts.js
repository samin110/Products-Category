import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const AddToProducts = ({ getGroupName }) => {
	const [saveToShop, setSaveToShop] = useState([]);
	const [saveValue, setSaveValue] = useState({
		id: 1,
		category: "",
		name: ""
	});
	const emptyRef = useRef();

	const getValueHandler = (e) => {
		setSaveValue(
			{
				...saveValue,
				category: getGroupName.e.value,
				name: e.target.value
			});
	}


	const addToProductsButton = () => {
		if (saveValue.name === "") {
			toast.warning('لطفا نام محصول را وارد کنید', { theme: "colored" })
		} else {
			setSaveValue({
				id: saveValue.id + 1
			});

			setSaveToShop([
				...saveToShop,
				saveValue,
			]);
			emptyRef.current.value = "";
			toast.success('محصول جدید اضافه شد', { theme: "colored", fontFamily: "vazir" })
		}
	}


	return (
		<div className="input-add-group">
			<label>نام محصول را وارد کنید</label>
			<input type="text" onChange={getValueHandler} ref={emptyRef} />
			<button className="btn" onClick={() => addToProductsButton(saveValue)} >اضافه به محصولات </button>
		</div>
	);
}

export default AddToProducts;