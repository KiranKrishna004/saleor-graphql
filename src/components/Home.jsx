/** @format */

import Card from "./Card";
import { useLazyQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import Banner from "./Banner";
// import { getProducts } from "../reducers/productsActions";

const Home = () => {
	const channel = useSelector(({ channel }) => channel.channel);
	const products = useSelector(({ products }) => products.products);
	const dispatch = useDispatch();
	const PRODUCTS = gql`
		query {
			products(first: 12, channel: "default-channel") {
				edges {
					node {
						id
						name
						seoDescription
						thumbnail {
							url
						}
						pricing {
							priceRange {
								start {
									gross {
										amount
										currency
									}
								}
							}
						}
					}
				}
			}
		}
	`;

	const [getQuery, { loading, error, data }] = useLazyQuery(PRODUCTS, {
		onCompleted: (data) => dispatch({ type: "GET", payload: data }),
		onError: (e) => {
			console.log(e);
		},
	});

	useEffect(() => {
		console.log("products: ", products);
		if (products.length === 0) {
			getQuery();
			console.log("inside", products, data);
		}
	}, []);

	if (loading) return <Loading />;
	if (error) return <p>Error :</p>;
	if (products.length === 0) return <>undefined</>;
	return (
		<div>
			<Banner />
			{/* <div className='xs:max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto'>
				<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4'>
					<Card data={products} />
				</div>
			</div> */}
		</div>
	);
};
export default Home;
