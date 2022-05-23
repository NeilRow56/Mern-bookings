import React from 'react';

const FeaturedProperties = () => {
	return (
		<div className="flex w-full space-x-4">
			<div className="flex flex-col w-1/4">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
					alt=""
					className="w-full  h-[150px] cursor-pointer rounded object-cover"
				/>
				<span className="font-bold">Aparthotel Stare Miasto</span>
				<span className="">Madrid</span>
				<span className="font-semibold">Starting from $120</span>
				<div className="">
					<button className="bg-[#003580] rounded text-white mr-1 px-1 border border-gray-800">
						8.9
					</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="flex flex-col w1/4">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
					alt=""
					className="w-full  h-[150px] cursor-pointer rounded object-cover"
				/>
				<span className="font-bold">Aparthotel Stare Miasto</span>
				<span className="">Madrid</span>
				<span className="font-semibold">Starting from $120</span>
				<div className="">
					<button className="bg-[#003580] rounded text-white  mr-1 px-1 border border-gray-800">
						8.9
					</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="flex flex-col w-1/4">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
					alt=""
					className="w-full  h-[150px] cursor-pointer rounded object-cover"
				/>
				<span className="font-bold">Aparthotel Stare Miasto</span>
				<span className="">Madrid</span>
				<span className="font-semibold">Starting from $120</span>
				<div className="">
					<button className="bg-[#003580] rounded text-white mr-1 px-1 border border-gray-800">
						8.9
					</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="flex  flex-col w-1/4">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
					alt=""
					className="w-full  h-[150px] cursor-pointer rounded object-cover"
				/>
				<span className="font-bold">Aparthotel Stare Miasto</span>
				<span className="">Madrid</span>
				<span className="font-semibold">Starting from $120</span>
				<div className="">
					<button className="bg-[#003580] text-white rounded mr-1 px-1 border border-gray-800">
						8.9
					</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
