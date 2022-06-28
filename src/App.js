/** @format */

import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { useMutation, useLazyQuery, gql } from "@apollo/client";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import Store from "./components/Store";
import Details from "./components/Details";
const App = () => {
	const dispatch = useDispatch();
	const [categories, setcategories] = useState([]);
	const VERIFY = gql`
		mutation Token($token: String!) {
			tokenVerify(token: $token) {
				isValid
				errors {
					field
					code
				}
			}
		}
	`;
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
	const [getVerification, { loading1, error1, data: validation }] = useMutation(
		VERIFY,
		{
			onCompleted: (validation) => {
				if (validation.tokenVerify.isValid) {
					dispatch({ type: "TRUE" });
				}
			},
			onError: (error) => console.log("Error: ", error),
		}
	);
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
		if (window.sessionStorage.getItem("notascamtoken") !== null) {
			getVerification({
				variables: { token: window.sessionStorage.getItem("notascamtoken") },
			});
		}
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
					<Route path='/:id' element={<Details />} />
					<Route path='/Store' element={<Store />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
