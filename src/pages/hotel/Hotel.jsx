import React, { useState } from 'react';
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
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const photos = [
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
		},
	];

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
								src={photos[slideNumber].src}
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
					<h1 className="font-bold">Tower Street Apartments</h1>
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
						<span className="text-sm">Elton St 125 New york</span>
					</div>
					<span className="text-[#0071c2] font-bold">
						Excellent location – 500m from center
					</span>
					<span className="text-[#008009] my-2 font-bold">
						Book a stay over £114 at this property and get a free
						airport taxi
					</span>
				</div>
				<div className="grid grid-cols-3 gap-4 max-w-[1024px] mx-auto ">
					{photos.map((photo, index) => (
						<div className="" key={index}>
							<img
								onClick={() => handleOpen(index)}
								src={photo.src}
								alt=""
								className=""
							/>
						</div>
					))}
				</div>
				<div className="grid grid-cols-8 mb-5">
					<div className="col-span-6 w-full flex flex-col px-3">
						<h1 className="font-bold my-8">
							Stay in the heart of City
						</h1>
						<p className="hotelDesc">
							Located a 5-minute walk from St. Florian's Gate in
							Krakow, Tower Street Apartments has accommodations
							with air conditioning and free WiFi. The units come
							with hardwood floors and feature a fully equipped
							kitchenette with a microwave, a flat-screen TV, and
							a private bathroom with shower and a hairdryer. A
							fridge is also offered, as well as an electric tea
							pot and a coffee machine. Popular points of interest
							near the apartment include Cloth Hall, Main Market
							Square and Town Hall Tower. The nearest airport is
							John Paul II International Kraków–Balice, 16.1 km
							from Tower Street Apartments, and the property
							offers a paid airport shuttle service.
						</p>
					</div>
					<div className="col-span-2 w-full flex flex-col mt-8 ml-3 bg-[#ebf3ff]  rounded-md p-2">
						<h4 className="font-bold text-[18px]">
							Perfect for a 9-night stay!
						</h4>
						<span className="my-4">
							Located in the real heart of Krakow, this property
							has an excellent location score of 9.8!
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
		</>
	);
}

export default Hotel;
