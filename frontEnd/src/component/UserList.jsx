import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);


	const getUsers = async () => {
		const response =
			await axios.get(
				'http://localhost:5000/users')
		console.log(response.data)
		setUsers(response.data)
	}
	return (
		<div className={'columns mt-5 is-centered'}>
			<div className='column is-half'>
				<h1>Lorem ipsum dolor sit amet.
				</h1>

				<table className={'table is-striped is fullwidth'}>
					<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Email</th>
						<th>Gender</th>
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
					{users.map((user, index) => (

						<tr key={user.id}>
							<td>{index + 1}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.gender}</td>
							<td>
								<button className={'button  is-small is-info mr-2'}>edit</button>
								<button className={'button  is-small is-danger'}>delete</button>
							</td>
						</tr>
					))}

					</tbody>
				</table>

			</div>
		</div>
	);
}

export default UserList;