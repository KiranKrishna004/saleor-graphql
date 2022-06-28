/** @format */
import { useSelector, useDispatch } from "react-redux";

const CartButton = ({ details, id }) => {
	const cart = useSelector(({ cart }) => cart.cart);
	const dispatch = useDispatch();
	const index = cart.findIndex((item) => id === item.id);

	return (
		<>
			{index !== -1 ? (
				<div className='flex rounded-lg border border-black p-2 space-x-4'>
					<button
						onClick={() => {
							dispatch({ type: "MINUS", payload: { id: details.id } });
						}}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
					<p>{cart[index].count}</p>
					<button
						onClick={() => {
							dispatch({ type: "PLUS", payload: { id: details.id } });
						}}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			) : (
				<button
					className='bg-gray-800 hover:bg-gray-600 text-white font-light py-2 px-4 rounded'
					onClick={() => {
						dispatch({ type: "PLUS", payload: { id: details.id } });
					}}>
					Add to Cart
				</button>
			)}
		</>
	);
};
export default CartButton;
