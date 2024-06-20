import React from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export const EditBook = () => {
	const [book, setBook] = useState('initState');
	const [age, setAge] = useState(0);
	const [stock, setStock] = useState(0);
	const navigate = useNavigate()
	const {id} = useParams()

	const updatebook = async (e) => {
		e.preventDefault()
		await axios.patch(`http://localhost:5000/books/${id}`, {
			book, age, gender
		})
		navigate('/')
	}


	const getBookById = async (e) => {
		const response = await axios.put(`http://localhost:5000/books/${id}`)
		setBook(response.data.book)
		setAge(response.data.age)
		setStock(response.data.stock)
	}


	return (
		<>
			<div className='columns mt-5 is-centered'>
				<div className='column is-half'>
					<form onSubmit={updatebook}>
						<div className='field'>
							<label className='label'>Book</label>
							<div className='control'>
								<input
									type='text'
									className='input'
									value={book}
									onChange={(e) => setBook(e.target.value)}
									placeholder='Book'
								/>
							</div>
						</div>
						<div className='field'>
							<label className='label'>Age</label>
							<div className='control'>
								<input
									type='text'
									className='input'
									value={age}
									onChange={(e) => setAge(e.target.value)}
									placeholder='Age'
								/>
							</div>
						</div>
						<div className='field'>
							<label className='label'>Gender</label>
							<div className='control'>
								<div className='select is-fullwidth'>
									<input
										type='text'
										className={'input'}
										value={stock}
										onChange={e => setStock(e.target.value)}
										placeholder={stock}

									/>
								</div>
							</div>
						</div>
						<div className='field'>
							<button type='submit' className='button is-success'>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}