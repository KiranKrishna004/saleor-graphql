/** @format */

import Card from "./Card";
import { useQuery, gql } from "@apollo/client";

const Display = ({ categories }) => {
	const QUERY = gql`
		query getProducts($filter: ProductFilterInput) {
			products(first: 12, channel: "default-channel", filter: $filter) {
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

	const { loading, error, data } = useQuery(QUERY, {
		variables: { filter: { categories: [`"${categories}"`] } },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;
	return (
		<div className='sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto'>
			<div className='grid sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4'>
				<Card data={data} />
			</div>
		</div>
	);
};
export default Display;
