import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import AddToProducts from './AddToProducts';

const options = [
	{ value: 'dairy', label: 'Dairy' },
	{ value: 'nuts', label: 'Nuts' },
	{ value: 'fruitage', label: 'Fruitage' },
];


const SelectComponent = ({ selectedValueHandler, getGroupName }) => {
	const [addToGroup, setAddToGroup] = useState(options);
	const [getValue, setGetValue] = useState({
		value: '',
		label: ''
	});
	const inputRef = useRef();

	// Save & Show input value in selectOption when click button
	const addToSelectHandler = () => {
		if (inputRef.current.value === "") {
			toast.warning('لطفا نام گروه را وارد کنید', { theme: "colored" })
		} else {
			setAddToGroup([...addToGroup, getValue]);
			toast.success('گروه جدید اضافه شد', { theme: "colored", fontFamily: "vazir" })
			inputRef.current.value = '';
		}
	}

	// Get value from input & store in getValue useState 
	const inputHandler = (e) => {
		setGetValue({ ...getValue, value: e.target.value, label: e.target.value });
	}

	return (
		<div className="select-icon">
			<div className="select-elements">
				<div>
					<span> نام گروه را انتخاب نمائید </span>
					<Select
						options={addToGroup}
						placeholder="طبقه بندی"
						onChange={selectedValueHandler}
					/>
				</div>
				<div className="input-add-group">
					<label>نام گروه جدید</label>
					<input type="text" name="value" onChange={inputHandler} ref={inputRef} />
					<button className="btn" onClick={addToSelectHandler}>اضافه به طبقه بندی</button>
					<AddToProducts getGroupName={getGroupName} />
				</div>
			</div>
		</div>
	);
}

export default SelectComponent;