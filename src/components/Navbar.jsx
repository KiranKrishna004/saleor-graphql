/** @format */
import { Link } from "react-router-dom";
import Login from "./Login";
import { useSelector } from "react-redux";
const Navbar = ({ categories }) => {
	const isValid = useSelector(({ isValid }) => isValid.isValid);
	console.log("isValid: ".isValid);
	return (
		<div className='bg-yellow-400 pt-12 pb-12'>
			<div className='grid w-full justify-items-end pr-5'>
				{/* <button className='border-2 px-2'>LogIn</button> */}
				{!isValid ? <Login /> : <img src='./user.png' className='h-2/3' />}
			</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
