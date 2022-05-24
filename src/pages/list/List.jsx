import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);

	return (
		<>
			<Navbar />
			<Header type="list" />
			<div className="grid grid-cols-6 gap-4  max-w-[1300px] mx-auto mt-3 p-3  relative ">
				<div
					className="col-span-2 bg-[#febb02] text-left  mb-3 rounded-md sticky top-10  h-[600px]
				"
				>
					<h1 className="mb-5 ml-8">Search</h1>

					<div className="flex flex-col">
						<label className="mr-3 ml-8">Destination</label>
						<input
							className="mt-2 pl-2 m-8
						"
							type="text"
							placeholder={destination}
						/>
					</div>
					<div className="flex flex-col ">
						<label className="mr-3 ml-8">Check-in Date</label>
						<span
							className="mt-2 pl-2 m-8 bg-white text-center "
							onClick={() => setOpenDate(!openDate)}
						>{`${format(
							date[0].startDate,
							'dd/MM/yyyy'
						)} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
						{openDate && (
							<DateRange
								className="mx-auto "
								onChange={(item) => setDate([item.selection])}
								minDate={new Date()}
								ranges={date}
							/>
						)}
					</div>

					<div className="flex flex-col mb-3 ">
						<label className="ml-8">Options</label>
						<div className="flex mb-2 justify-between ">
							<span className="ml-10 mr-2">
								Min price <small> per night</small>
							</span>
							<input
								type="number"
								className="
        form-control
        block
        w-[80px]
        px-3
		mr-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
								id="exampleNumber0"
							/>
						</div>
						<div className="flex mb-2 justify-between">
							<span className="ml-10 mr-2">
								Max price <small> per night</small>
							</span>
							<input
								type="number"
								className="
        form-control
        block
        w-[80px]
        px-3
		mr-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
								id="exampleNumber0"
							/>
						</div>
						<div className="flex mb-2 justify-between">
							<span className="ml-10 mr-2">Adults</span>
							<input
								type="number"
								id="exampleNumber0"
								min={1}
								placeholder={options.adult}
								className="
        form-control
        block
        w-[80px]
        px-3
		mr-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
							/>
						</div>
						<div className="flex mb-2 justify-between">
							<span className="ml-10 mr-2">Children</span>
							<input
								type="number"
								id="exampleNumber0"
								min={0}
								placeholder={options.children}
								className="
        form-control
        block
        w-[80px]
        px-3
		mr-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
							/>
						</div>
						<div className="flex mb-2 justify-between">
							<span className="ml-10 mr-2">Rooms</span>
							<input
								type="number"
								id="exampleNumber0"
								min={1}
								placeholder={options.rooms}
								className="
        form-control
        block
        w-[80px]
        px-3
		mr-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
							/>
						</div>
					</div>
					<div className="flex w-full ">
						<button className="  cursor-pointer text-[#fff] bg-[#0071c2] rounded  px-1  h-8 mb-5 font-semibold w-full mx-10 ">
							Search
						</button>
					</div>
				</div>
				<div className="col-span-4">
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
				</div>
			</div>
		</>
	);
};

export default List;
