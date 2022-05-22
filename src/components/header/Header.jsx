import React, { useState } from 'react';
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
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

// import {useState} from 'react'
// const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: 'selection'
//     }
//   ]);

// <DateRange
//   editableDateInputs={true}
//   onChange={item => setState([item.selection])}
//   moveRangeOnFirstSelection={false}
//   ranges={state}
// />

function Header({ type }) {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		rooms: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === 'increase'
						? options[name] + 1
						: options[name] - 1,
			};
		});
	};

	return (
		<div className="w-full flex flex-col bg-[#003580] ">
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
			{type !== 'list' && (
				<>
					<div className="max-w-[1024px] mx-auto w-full text-[#fff]">
						<h1>A lifetime of discounts? It's Genius.</h1>
						<p className="my-[20px]">
							Get rewarded for your travels – unlock instant
							savings of 10% or more with a free Lamabooking
							account
						</p>
						<button className=" bg-[#0071c2] text-[#fff] border mt-2 mb-16 px-2 border-gray-200 rounded font-semibold">
							Sign in / Register
						</button>
					</div>
					<div className="flex bg-[#003580] w-full  max-w-[1024px] mx-auto relative p-2">
						<div className="max-w-[1024px] mx-auto flex space-x-4 w-full bg-[#fff] py-1 px-3 h-12 items-center justify-between border-2 border-[#f0c14b]  absolute bottom-[-23px] text-gray-500 ">
							<div>
								<FontAwesomeIcon
									className="mr-2"
									icon={faBed}
								/>
								<input
									className="border border-gray-400 rounded"
									type="text"
									placeholder="Where are you going?"
								/>
							</div>

							<div className="flex flex-col sm:max-w-[800px]">
								<div className="flex">
									<FontAwesomeIcon
										className="mr-2"
										icon={faCalendarDays}
									/>
									<span
										className="cursor-pointer"
										onClick={() => setOpenDate(!openDate)}
									>{`${format(
										date[0].startDate,
										'dd/MM/yy'
									)} to ${format(
										date[0].endDate,
										'dd/MM/yy'
									)}`}</span>
								</div>
								{openDate && (
									<DateRange
										className="absolute top-[50px] "
										editableDateInputs={true}
										onChange={(item) =>
											setDate([item.selection])
										}
										moveRangeOnFirstSelection={false}
										ranges={date}
									/>
								)}
							</div>
							<div className="flex relative">
								<FontAwesomeIcon
									className="mr-2"
									icon={faPerson}
								/>
								<span
									className="cursor-pointer"
									onClick={() => setOpenOptions(!openOptions)}
								>{`${options.adult} adult  ·  ${options.children} children  ·  ${options.rooms} rooms `}</span>
								{openOptions && (
									<div className="flex flex-col absolute bottom-[-135px] w-full border border-gray-200 rounded p-2 ">
										<div className=" flex justify-between mt-2">
											<span className="">Adult</span>
											<div>
												<button
													disabled={
														options.adult <= 1
													}
													onClick={() =>
														handleOption(
															'adult',
															'decrease'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 disabled:cursor-not-allowed "
												>
													-
												</button>
												<span className="font-bold">
													{options.adult}
												</span>
												<button
													onClick={() =>
														handleOption(
															'adult',
															'increase'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 "
												>
													+
												</button>
											</div>
										</div>
										<div className="flex justify-between mt-2">
											<span>Children</span>
											<div>
												<button
													disabled={
														options.children <= 0
													}
													onClick={() =>
														handleOption(
															'children',
															'decrease'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 disabled:cursor-not-allowed  "
												>
													-
												</button>
												<span className="font-bold">
													{options.children}
												</span>
												<button
													onClick={() =>
														handleOption(
															'children',
															'increase'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 "
												>
													+
												</button>
											</div>
										</div>
										<div className="flex justify-between mt-2">
											<span>Rooms</span>
											<div>
												<button
													disabled={
														options.rooms <= 1
													}
													onClick={() =>
														handleOption(
															'rooms',
															'decrease'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 disabled:cursor-not-allowed  "
												>
													-
												</button>
												<span className="font-bold">
													{options.rooms}
												</span>
												<button
													onClick={() =>
														handleOption(
															'rooms',
															'increase'
														)
													}
													className="border border-[#0071c2] cursor-pointer text-[#0071c2] bg-gray-200 rounded font-bold px-1 mx-2 w-6 "
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div>
								<button className=" bg-[#0071c2] text-[#fff] px-2 py-1 rounded font-semibold">
									Search
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Header;
