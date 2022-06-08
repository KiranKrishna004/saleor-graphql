/** @format */

import { Dropdown, Selection } from "react-dropdown-now";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Display from "./components/Display";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
	const dispatch = useDispatch();
	const channel = useSelector(({ channel }) => channel.channel);
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
		onError: (error) => console.log(error),
	});

	useEffect(() => {
		getQuery();
	}, []);

	return (
		<div className='min-h-screen bg-gray-100'>
			<Router>
				<div className='bg-white shadow mb-7 '>
					<div className='sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto'>
						<div className='flex justify-between items-center h-16'>
							<Link to='/' className='justify-items-start'>
								Saleor Storefront
							</Link>
							<div className='flex space-x-4	'>
								{categories.map(({ node }, index) => {
									return (
										<div key={index} className='text-sm'>
											<Link to={`/${node.name}`}>{node.name}</Link>
										</div>
									);
								})}
								<div className='text-sm space-x-2'>
									<Link to='/signin'>Signin</Link>
									<Link to='/signup'>Signup</Link>
								</div>
								<div>
									<button
										onClick={() => {
											console.log("Clicked US");
											dispatch({ type: "CHANGE", payload: "default-channel" });
										}}>
										US
									</button>
									<button
										onClick={() => {
											console.log("Clicked PLN");
											dispatch({ type: "CHANGE", payload: "channel-pln" });
										}}>
										PLN
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
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
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
