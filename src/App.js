/** @format */

import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

const App = () => {
	const [categories, setcategories] = useState([]);
	const QUERY = gql`
		query {
			categories(first: 13) {
				edges {
					node {
						id
						name
					}
				}
			}
		}
	`;
	const [getQuery, { loading, error, data }] = useLazyQuery(QUERY, {
		onCompleted: ({ categories }) =>
			setcategories(
				categories.edges.filter(
					({ node }) =>
						![
							"Hoodies",
							"Polo Shirts",
							"T-shirts",
							"Gift cards",
							"Accessories",
						].includes(node.name)
				)
			),
		onError: (error) => console.log("error: ", error),
	});

	useEffect(() => {
		getQuery();
	}, []);

	return (
		<div className='min-h-screen bg-gray-100'>
			<Router>
				<Navbar categories={categories} />
				<Routes>
					{categories.map(({ node }, index) => {
						return (
							<Route
								path={`/${node.name}`}
								key={index}
								element={<Display categories={node.id} />}
							/>
						);
					})}
					<Route path='/Store' />
					<Route path='/Login' element={<Login />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
