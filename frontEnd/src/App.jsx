import React from 'react';
import UserList from "./component/UserList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUser from "./component/AddUser.jsx";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<UserList/>}/>
				<Route path={'/add'} element={<AddUser/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
