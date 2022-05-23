import React from 'react';
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';

function Home() {
	return (
		<div className="flex flex-col ">
			<Navbar />
			<Header />
			<div className="flex flex-col w-full max-w-[1024px]  mx-auto mt-20 space-y-4 items-center ">
				<Featured className="" />
			</div>
			<div className=" flex w-full max-w-[1024px] mx-auto ">
				<h1 className="font-bold w-full mt-6  mb-3">
					Browse by property type
				</h1>
			</div>
			<div className=" flex   max-w-[1024px] mx-auto ">
				<PropertyList />
			</div>
			<div className=" flex w-full max-w-[1024px] mx-auto ">
				<h1 className="font-bold w-full mt-6  mb-3">
					Homes guests love
				</h1>
			</div>
			<div className=" flex   max-w-[1024px] mx-auto ">
				<FeaturedProperties />
			</div>

			<div className=" flex  mt-6  w-full mx-auto">
				<MailList />
			</div>
			<div className=" flex  mt-6  w-full mx-auto">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
