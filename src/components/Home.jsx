/** @format */

import Card from "./Card";
import { useLazyQuery, useQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../reducers/productsActions";

const Home = () => {
	const channel = useSelector(({ channel }) => channel.channel);
	const products = useSelector(({ products }) => products.products);
	const dispatch = useDispatch();
	console.log("channel: ", channel);
	const PRODUCTS = gql`
		query Home($channel: String) {
			products(first: 12, channel: $channel) {
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
		variables: { channel: channel },
		onCompleted: (data) => getProducts(data),
		onError: (e) => {
			console.log(e);
		},
	});

	useEffect(() => {
		getQuery();
	}, [channel]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;
	if (data === undefined) return <></>;
	return (
		<div className='sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto'>
			<div className='grid sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4'>
				<Card data={products} />
			</div>
		</div>
	);
};
export default Home;
