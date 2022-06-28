/** @format */
import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartButton from "./CartButton";
const Details = () => {
	const [product, setProduct] = useState();
	const { id } = useParams();
	const PRODUCT = gql`
		query getProduct($id: ID) {
			product(id: $id, channel: "default-channel") {
				id
				name
				seoDescription
				seoTitle
				pricing {
					priceRange {
						start {
							gross {
								amount
							}
						}
					}
				}
			}
		}
	`;
	console.log("params: ", id);
	const [getProduct, { loading, error, data }] = useLazyQuery(PRODUCT, {
		onCompleted: ({ product }) => setProduct(product),
		onError: (error) => console.log("error: ", error),
	});
	useEffect(() => {
		getProduct({ variables: { id: id } });
	}, []);
	console.log(product);
	if (product === undefined) return <></>;
	return (
		<div>
			<p>{product.name}</p>
			<p>{product.seoDescription}</p>
			<p>{product.pricing.priceRange.start.gross.amount}</p>
			<CartButton details={product} id={id} />
		</div>
	);
};
export default Details;
