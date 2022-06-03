import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			dispatch({ type: 'LOGOUT' });
		} catch (err) {
			dispatch({ type: 'LOGOUT_FAILURE', payload: err.response.data });
		}
	};
	return (
		<div className="w-full  bg-[#003580]">
			<div className="flex w-full h-[50px] max-w-[1024px]  mx-auto bg-[#003580] text-[#fff]  ">
				<div className="flex items-center justify-between w-full">
					<Link to="/">
						<span className="font-bold ml-2">LamaBooking</span>
					</Link>
					{user ? (
						<div className="mr-5 flex ">
							<button
								className="mr-5 border border-white rounded-md px-2"
								onClick={handleClick}
							>
								Logout
							</button>
							<h3>Logged in as:</h3>
							<h3 className="text-[#f0c14b] pl-3 ">
								{' '}
								{user.username}
							</h3>
						</div>
					) : (
						<div className="">
							<button className=" h-[30px] border border-gray-200 bg-white text-[#003580] px-2 rounded m-2">
								Register
							</button>
							<Link to="/login">
								<button className=" h-[30px] border border-gray-200 bg-white text-[#003580] px-2 rounded m-2">
									Login
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
