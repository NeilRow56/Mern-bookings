import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function Hotel() {
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const { data, loading, error } = useFetch(
		`http://localhost:8800/api/hotels/find/${id}`
	);

	const handleOpen = (index) => {
		setSlideNumber(index);

		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<>
			<Navbar />
			<Header type="list" />
			{loading ? (
				'loading...'
			) : (
				<div className="flex flex-col w-full max-w-[1024px] mx-auto">
					{open && (
						<div className="sticky top-0 left-0 w-full h-screen bg-black object-fit overflow-hidden z-40  pt-10 opacity-90">
							<FontAwesomeIcon
								icon={faCircleXmark}
								className="text-white absolute top-1 right-5 h-8 w-8"
								onClick={() => setOpen(false)}
							/>

							<div className=" flex flex-col   relative ">
								<FontAwesomeIcon
									icon={faCircleArrowLeft}
									className="text-white absolute top-1/2 left-10 w-12 h-12 cursor-pointer "
									onClick={() => handleMove('l')}
								/>
								<img
									src={data.photos[slideNumber]}
									alt=""
									className="sliderImg"
								/>
								<FontAwesomeIcon
									icon={faCircleArrowRight}
									className="text-white absolute top-1/2 right-10 w-12 h-12 cursor-pointer"
									onClick={() => handleMove('r')}
								/>
							</div>
						</div>
					)}
					<div className="flex w-full justify-between max-w-[1024px] mx-auto mt-8 -z-10">
						<h1 className="font-bold">{data.name}</h1>
						<button className="  cursor-pointer text-[#fff] bg-[#0071c2] rounded  px-1 h-16  md:h-8 my-2 font-semibold   ">
							Reserve or Book Now!
						</button>
					</div>
					<div className="w-full max-w-[1024px] mx-auto flex flex-col">
						<div className="">
							<FontAwesomeIcon
								className="mr-4"
								icon={faLocationDot}
							/>
							<span className="text-sm">{data.address}</span>
						</div>
						<span className="text-[#0071c2] font-bold">
							Excellent location – {data.distance}m from center
						</span>
						<span className="text-[#008009] my-2 font-bold">
							Book a stay over £{data.cheapestPrice} at this
							property and get a free airport taxi
						</span>
					</div>
					<div className="grid grid-cols-3 gap-4 max-w-[1024px] mx-auto ">
						{data.photos?.map((photo, index) => (
							<div className="" key={index}>
								<img
									onClick={() => handleOpen(index)}
									src={photo}
									alt=""
									className=""
								/>
							</div>
						))}
					</div>
					<div className="grid grid-cols-8 mb-5">
						<div className="col-span-6 w-full flex flex-col px-3">
							<h1 className="font-bold my-8">{data.title}</h1>
							<p className="hotelDesc">{data.desc}</p>
						</div>
						<div className="col-span-2 w-full flex flex-col mt-8 ml-3 bg-[#ebf3ff]  rounded-md p-2">
							<h4 className="font-bold text-[18px]">
								Perfect for a 9-night stay!
							</h4>
							<span className="my-4">
								Located in the real heart of Krakow, this
								property has an excellent location score of 9.8!
							</span>
							<h2 className="mb-7">
								<b>£945</b> (9 nights)
							</h2>
							<button className="bg-[#0071c2] h-16 px-1 rounded-md text-[#fff] md:h-8 items-center mx-3">
								Reserve or Book Now!
							</button>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			)}
		</>
	);
}

export default Hotel;
