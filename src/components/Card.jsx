/** @format */

const Card = ({ data }) => {
	console.log("data to card: ", data);
	return data.products.edges.map(({ node }, index) => (
		<li
			key={index}
			className='list-none border-1 shadow rounded-lg bg-yellow-400'>
			<img src={node.thumbnail.url} className='bg-white' />
			<div className='p-2 border-t border-gray-100 '>
				<div className='flex justify-between mb-2 items-baseline'>
					<p className='text-sm font-medium'>{node.name}</p>
					<p className='text-xs  whitespace-nowrap'>
						{node.pricing.priceRange.start.gross.amount}
						{"  "}
						{node.pricing.priceRange.start.gross.currency}
					</p>
				</div>
				<p>{node.seoDescription}</p>
			</div>
		</li>
	));
};
export default Card;
