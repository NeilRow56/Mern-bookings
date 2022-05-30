import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full  bg-[#003580]">
			<div className="flex w-full h-[50px] max-w-[1024px]  mx-auto bg-[#003580] text-[#fff]  ">
				<div className="flex items-center justify-between w-full">
					<Link to="/">
						<span className="font-bold ml-2">LamaBooking</span>
					</Link>
					<div className="">
						<button className=" h-[30px] border border-gray-200 bg-white text-[#003580] px-2 rounded m-2">
							Register
						</button>
						<button className=" h-[30px] border border-gray-200 bg-white text-[#003580] px-2 rounded m-2">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
