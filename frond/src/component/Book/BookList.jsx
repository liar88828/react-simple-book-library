import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import axios from "axios";

function BookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks()
	}, [])

	const getBooks = async () => {
		await axios.get('http://localhost:5000/books')
			.then(res => {
				console.log(res.data)
				setBooks(res.data)
			})
	}
	const deleteBook = async (id) => {
		await axios.delete(`http://localhost:5000/books/${id}`)
		getBooks()
	}
	return (
		<div className={'columns mt-5 is-centered'}>

			<div className='column is-half'>
				<Link to={'add'} className={'button'}>Add Book</Link>
				<table className={'table is-striped is fullwidth'}>

					<thead>
					<tr>
						<td>No</td>
						<td>Name</td>
						<td>Email</td>
						<td>Actions</td>
					</tr>
					</thead>

					<tbody>
					{books.map((book, index) => (
						<tr key={book.id}>
							<td>{index + 1}</td>
							<td>{book.book}</td>
							<td>{book.age}</td>
							<td>{book.stock}</td>
							<td>
								<Link
									to={`edit/${book.id}`}
									className={'button  is-small is-info mr-2'}>
									edit
								</Link>
								<button
									onClick={() => deleteBook(book.id)}
									className='button is-small is-danger'
								>
									Delete
								</button>


							</td>
						</tr>
					))}


					</tbody>
				</table>
			</div>
			<Outlet/>
		</div>
	);
}

export default BookList;