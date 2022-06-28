/** @format */

import { gql, useLazyQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import Card from "./Card";
import Loading from "./Loading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Store = () => {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.products);
	const PRODUCTS = gql`
		{
			products(first: 12, channel: "default-channel") {
				pageInfo {
					endCursor
					hasNextPage
				}
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
		getQuery();
	}, []);
	if (loading) return <Loading />;
	if (error) return <p>Error :</p>;
	if (products.length === 0) return <>undefined</>;
	return (
		<div className='xs:max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto '>
			<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4'>
				<Card data={data} />
			</div>
		</div>
	);
};

export default Store;
