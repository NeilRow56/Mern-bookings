import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

function List() {
	return (
		<>
			<Navbar />
			<Header type="list" />
			<h1>List</h1>
		</>
	);
}

export default List;