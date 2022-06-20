/** @format */

import Card from "./Card";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";
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

	if (loading) return <Loading />;
	if (error) return <p>Error :</p>;
	return (
		<div className='xs:max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto '>
			<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4'>
				<Card data={data} />
			</div>
		</div>
	);
};
export default Display;
