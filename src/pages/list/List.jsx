import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [dates, setDates] = useState(location.state.dates);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

	const { data, loading, error, reFetch } = useFetch(
		`http://localhost:8800/api/hotels?city=${destination}&min=${
			min || 0
		}&max=${max || 999}`
	);
	const handleClick = () => {
		reFetch();
	};

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
							className="  mt-2 pl-2 m-8
						"
							type="text"
							placeholder={destination}
						/>
					</div>
					<div className="flex flex-col ">
						<label className="mr-3 ml-8">Check-in Date</label>
						<span
							className="mt-2 pl-2 m-8 bg-white text-center text-gray-300"
							onClick={() => setOpenDate(!openDate)}
						>{`${format(
							dates[0].startDate,
							'dd/MM/yyyy'
						)} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
						{openDate && (
							<DateRange
								onChange={(item) => setDates([item.selection])}
								minDate={new Date()}
								ranges={dates}
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
								onChange={(e) => setMin(e.target.value)}
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
								onChange={(e) => setMax(e.target.value)}
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
								placeholder={options.room}
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
						<button
							onClick={handleClick}
							className="  cursor-pointer text-[#fff] bg-[#0071c2] rounded  px-1  h-8 mb-5 font-semibold w-full mx-10 "
						>
							Search
						</button>
					</div>
				</div>
				<div className="col-span-4">
					{loading ? (
						'loading...'
					) : (
						<>
							{data.map((item) => (
								<SearchItem item={item} key={item._id} />
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default List;
