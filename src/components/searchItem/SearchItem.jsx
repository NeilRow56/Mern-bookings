import React from 'react';

const SearchItem = () => {
	return (
		<div className="grid grid-cols-5 p-2  gap-4 mb-4 border border-gray-200 rounded-md">
			<div className="w-[170px] h-[170px] col-span-1 object-cover">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
					alt=""
				/>
			</div>
			<div className="col-span-3 w-full flex flex-col ml-3">
				<h3 className="text-[#0071c2] font-bold ">
					Tower Street Apartments
				</h3>
				<span className="text-sm">500m from center</span>
				<span className="bg-[#008009] rounded-lg w-[150px] text-[#fff] px-1 my-1">
					Free airport taxi
				</span>
				<span className="text-sm font-semibold mb-1">
					Studio Apartment with Air conditioning
				</span>
				<span className="text-sm mb-1">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="text-sm font-bold text-[#008009] mb-1">
					Free cancellation{' '}
				</span>
				<span className="text-sm text-[#008009]">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="w-full">
				<div className="flex justify-between">
					<span>Excellent</span>
					<button className="bg-[#003580] text-white rounded mr-1 px-1 border border-gray-800">
						8.9
					</button>
				</div>
				<div className="flex flex-col mt-5">
					<span className="font-bold text-[20px]">£112</span>
					<span className="text-sm">Includes taxes and fees</span>
					<div className="w-80%  mt-6 mr-2 ">
						<button className="  cursor-pointer text-[#fff] bg-[#0071c2] rounded  px-1  h-8 mb-2 font-semibold w-full mx-2 ">
							See availability
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
