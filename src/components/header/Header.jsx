import {
	faBed,
	faCalendarDays,
	faCar,
	faLandmarkDome,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header() {
	return (
		<div className="w-full flex flex-col bg-[#003580]">
			<div className="flex  w-full h-[50px] max-w-[1024px]  mx-auto  bg-[#003580] text-[#fff] pt-[20px] pb-[50px] space-x-[40px] ">
				<div className=" ml-2 space-x-[10px] px-2 h-[30px] checkout-steps active">
					<FontAwesomeIcon icon={faBed} />
					<span>Stays</span>
				</div>
				<div className="space-x-[10px]">
					<FontAwesomeIcon icon={faPlane} />
					<span>Flights</span>
				</div>
				<div className="space-x-[10px]">
					<FontAwesomeIcon icon={faCar} />
					<span>Car rentals</span>
				</div>
				<div className="space-x-[10px]">
					<FontAwesomeIcon icon={faLandmarkDome} />
					<span>Attractions</span>
				</div>
				<div className="space-x-[10px]">
					<FontAwesomeIcon icon={faTaxi} />
					<span>Airport taxis</span>
				</div>
			</div>

			<div className="max-w-[1024px] mx-auto w-full text-[#fff]">
				<h1>A lifetime of discounts? It's Genius.</h1>
				<p className="my-[20px]">
					Get rewarded for your travels – unlock instant savings of
					10% or more with a free Lamabooking account
				</p>
				<button className=" bg-[#0071c2] text-[#fff] border my-2 px-2 border-gray-200 rounded font-semibold">
					Sign in / Register
				</button>
			</div>
		</div>
	);
}

export default Header;
