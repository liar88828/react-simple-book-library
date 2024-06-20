import React, {createContext} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Navbar from "./component/Home/Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import UserList from "./component/User/UserList.jsx";
import AddUser from "./component/User/AddUser.jsx";
import EditUser from "./component/User/EditUser.jsx";
import BookList from "./component/Book/BookList.jsx";
import {AddBook} from "./component/Book/AddBook";
import {EditBook} from "./component/Book/EditBook";


function App() {
	createContext()

	return (
		<BrowserRouter>
			<div>
				<nav>
					<Link to={"/"}> Home </Link>
					<Link to={"user"}> User </Link>
					<Link to={"book"}> Book </Link>
				</nav>

				<Navbar/>
				<Routes>
					<Route path={'/'} element={<Home/>}/>
					<Route path='user' element={<UserList/>}/>
					<Route path='user/add' element={<AddUser/>}/>
					<Route path='user/edit/:id' element={<EditUser/>}/>


					<Route path={'book'} element={<BookList/>}/>
					<Route path={'book/add'} element={<AddBook/>}/>
					<Route path={'book/edit/:id'} element={<EditBook/>}/>


					{/*<Route path="*" element={<NoMatch />} />*/}
				</Routes>
			</div>

		</BrowserRouter>

	)
		;
}

export default App;
