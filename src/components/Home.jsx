/** @format */

import { useLazyQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import Banner from "./Banner";

const Home = () => {
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
			console.log("error: ", e);
		},
	});

	useEffect(() => {
		if (products.length === 0) {
			getQuery();
		}
	}, []);

	if (loading) return <Loading />;
	if (error) return <p>Error :</p>;
	if (products.length === 0) return <>undefined</>;
	return (
		<div>
			<Banner />
		</div>
	);
};
export default Home;
