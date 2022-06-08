/** @format */

const Card = ({ data }) => {
	console.log("data to card: ", data);
	return data.products.edges.map(({ node }, index) => (
		<li key={index} className='list-none'>
			<img src={node.thumbnail.url} />
			<div className='p-2 border-t border-gray-100'>
				<div className='flex justify-between mb-2 items-baseline'>
					<p className='text-lg'>{node.name}</p>
					<p className='text-xs font-bold'>
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
