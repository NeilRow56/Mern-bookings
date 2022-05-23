import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="w-full flex flex-col">
				<div className="w-full flex  mx-10 text-[#003580] ">
					<ul className="w-1/5">
						<li className="cursor-pointer">Countries</li>
						<li className="cursor-pointer">Regions</li>
						<li className="cursor-pointer">Cities</li>
						<li className="cursor-pointer">Districts</li>
						<li className="cursor-pointer">Airports</li>
						<li className="cursor-pointer" cursor-pointer>
							HotelsAirports
						</li>
					</ul>
					<ul className="w-1/5">
						<li className="cursor-pointer">Homes </li>
						<li className="cursor-pointer">Apartments </li>
						<li className="cursor-pointer">Resorts </li>
						<li className="cursor-pointer">Villas</li>
						<li className="cursor-pointer">Hostels</li>
						<li className="cursor-pointer">Guest houses</li>
					</ul>
					<ul className="w-1/5">
						<li className="cursor-pointer">
							Unique places to stay{' '}
						</li>
						<li className="cursor-pointer">Reviews</li>
						<li className="cursor-pointer">
							Unpacked: Travel articles{' '}
						</li>
						<li className="cursor-pointer">Travel communities </li>
						<li className="cursor-pointer">
							Seasonal and holiday deals{' '}
						</li>
					</ul>
					<ul className="w-1/5">
						<li className="cursor-pointer">Car rental </li>
						<li className="cursor-pointer">Flight Finder</li>
						<li className="cursor-pointer">
							Restaurant reservations{' '}
						</li>
						<li className="cursor-pointer">Travel Agents </li>
					</ul>
					<ul className="w-1/5">
						<li className="cursor-pointer">Curtomer Service</li>
						<li className="cursor-pointer">Partner Help</li>
						<li className="cursor-pointer">Careers</li>
						<li className="cursor-pointer">Sustainability</li>
						<li className="cursor-pointer">Press center</li>
						<li className="cursor-pointer">
							Safety Resource Center
						</li>
						<li className="cursor-pointer">Investor relations</li>
						<li className="cursor-pointer">Terms & conditions</li>
					</ul>
				</div>
				<div className="w-full text-center mb-10 text-[#003580]">
					Copyright © 2022 Lamabooking.
				</div>
			</div>
		</>
	);
};

export default Footer;
