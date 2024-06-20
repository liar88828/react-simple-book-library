import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const AddBook = () => {

	const [book, setBook] = useState('');
	const [age, setAge] = useState(0);
	const [stock, setStock] = useState(0);

	const navigate = useNavigate()

	const saveBook = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:5000/books', {
			book, age, stock
		});
		navigate('../book')
	}
	return (
		<>
			<div className={' columns mt-5 is-centered'}>
				<div className='column is-half'>
					<form
						onSubmit={saveBook}>
						<div className='field'>
							<label className={'label'} htmlFor=''>Book</label>
							<div className='control'>
								<input
									type='text'
									className='input'
									placeholder={'Book'}
									onChange={e => setBook(e.target.value)}
								/>
							</div>
						</div>
						<div className='field'>
							<label className={'label'} htmlFor=''>Age</label>
							<div className='control'>
								<input
									type='text'
									className='input'
									placeholder={'Age'}
									onChange={e => setAge(e.target.value)}
								/>
							</div>
						</div>
						<div className='field'>
							<label className={'label'} htmlFor=''>Stock</label>
							<div className='control'>
								<input
									type='text'
									className='input' placeholder={'Stock'}
									onChange={e => setStock(e.target.value)}
								/>
							</div>
						</div>
						<div className={'field'}>
							<button
								type={"submit"}
								className={'button is-success'}>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}