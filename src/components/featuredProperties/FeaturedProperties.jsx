import React from 'react';
import useFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch(
		'http://localhost:8800/api/hotels?featured=true&limit=4'
	);

	return (
		<div className="w-full max-w-[1300px] mx-auto flex space-x-4">
			{loading ? (
				'Loading'
			) : (
				<>
					<div className=" flex space-x-4 w-full">
						{data.map((item) => (
							<div className=" flex flex-col " key={item._id}>
								<img
									src={item.photos[0]}
									alt=""
									className="w-[250px] full  h-[250px] cursor-pointer rounded object-cover"
								/>
								<span className="font-bold">{item.name}</span>
								<span className="">{item.city}</span>
								<span className="font-semibold">
									Starting from ${item.cheapestPrice}
								</span>
								{item.rating && (
									<div className="fpRating">
										<button className="bg-[#003580] rounded text-white mr-1 px-1 border border-gray-800">
											{item.rating}
										</button>
										<span>Excellent</span>
									</div>
								)}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default FeaturedProperties;
