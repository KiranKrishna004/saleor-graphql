/** @format */
import { Link } from "react-router-dom";
const Card = ({ data }) => {
	if (data === undefined) return <></>;
	return data.products.edges.map(({ node }, index) => (
		<li
			key={index}
			className='relative list-none border-1 shadow rounded-lg bg-yellow-400'>
			<img src={node.thumbnail.url} className='bg-white' />
			<div className='p-2 border-t border-gray-100 '>
				<div className='flex justify-between mb-2 items-baseline'>
					<Link to={`/${node.id}`}>
						<p className='text-sm font-medium'>{node.name}</p>
					</Link>
					<p className='text-xs whitespace-nowrap'>
						{node.pricing.priceRange.start.gross.amount}
						{"  "}
						{node.pricing.priceRange.start.gross.currency}
					</p>
				</div>
				<p className='font-light'>{node.seoDescription}</p>
				<Link to={`/${node.id}`}>
					<button className='absolute rounded-md bg-black text-white px-2 bottom-0 right-0'>
						Buy
					</button>
				</Link>
			</div>
		</li>
	));
};
export default Card;
