import React from 'react';

const MailList = () => {
	return (
		<div className="w-full flex flex-col bg-[#003580] text-[#fff]">
			<div className="flex flex-col text-center mx-auto">
				<h1 className="font-bold my-[20px]">Save time, save money!</h1>
				<span className="">
					Sign up and we'll send the best deals to you
				</span>
				<div className="my-[10px]">
					<input
						className="border border-gray-200 rounded  mr-3 p2 h-8 w-[300px]"
						type="text"
						placeholder="  Your Email"
					/>
					<button className="bg-[#0071c2] rounded text-[#fff] px-2 py-1 h-8">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default MailList;
