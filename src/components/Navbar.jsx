/** @format */
import { Link } from "react-router-dom";

const Navbar = ({ categories }) => {
	return (
		<div className='bg-yellow-400 pt-12 pb-12'>
			<div className='pb-6'>
				<div className='flex items-center flex-col h-16'>
					<Link
						to='/'
						className='pb-10 justify-center font-black text-5xl whitespace-nowrap'>
						Saleor
					</Link>
					<div className='space-x-7 hidden md:flex md:justify-center font-light bg-black w-full py-3'>
						{categories.map(({ node }, index) => {
							return (
								<div key={index} className='text-md text-gray-300'>
									<Link to={`/${node.name}`}>{node.name}</Link>
								</div>
							);
						})}
						{/* <div className='text-sm space-x-2'>
							<Link to='/signin'>Signin</Link>
							<Link to='/signup'>Signup</Link>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
