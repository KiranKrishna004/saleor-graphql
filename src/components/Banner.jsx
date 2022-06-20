/** @format */

const Banner = () => {
	return (
		<div className='grid grid-cols-2 bg-yellow-400'>
			<div className='flex flex-col justify-center items-center h-1/2'>
				<p className='text-3xl'>Saleor-Sail Here</p>
				<a
					href='Store'
					className='relative inline-block px-4 py-2 font-medium group'>
					<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-200 group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
					<span className='absolute inset-0 w-full h-full bg-black border-2 border-gray-200 transition duration-200 ease-out hover:border-2 hover:border-gray-200 group-hover:bg-yellow-400'></span>
					<span className='flex items-baseline h-full w-full relative text-gray-200 group-hover:text-black'>
						Store
						<svg
							class='w-4 h-4 ml-2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fill-rule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clip-rule='evenodd'></path>
						</svg>
					</span>
				</a>
			</div>
			<img
				className='object-scale-down w-full'
				loading='lazy'
				src='https://www.latelieroptica.es/wp-content/uploads/2020/04/Moscot-Lemtosh-Rx.jpg'
			/>
		</div>
	);
};
export default Banner;

<a
	href='#_'
	class='inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0'
	data-primary='green-400'
	data-rounded='rounded-2xl'
	data-primary-reset='{}'>
	Get Started
</a>;
