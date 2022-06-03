import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post(
				'http://localhost:8800/api/auth/login',
				credentials
			);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
			navigate('/');
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">Login </h1>
				<p>
					Don't have an account?{' '}
					<Link className="underline" to="/signin">
						Register
					</Link>{' '}
				</p>
			</div>
			<form>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Username</label>
					<input
						className="border border-gray-200 rounded:md p-3"
						type="text"
						autoComplete="username"
						placeholder="username"
						id="username"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Password</label>
					<input
						className="border border-gray-200 rounded:md p-3"
						type="password"
						autoComplete="current-password"
						placeholder="password"
						id="password"
						onChange={handleChange}
					/>
				</div>
				<button
					className="bg-[#f0c14b] rounded-md  w-full mx-auto  border border-[#a88734] hover:bg-yellow-600 p-3 my-2 "
					disabled={loading}
					onClick={handleClick}
				>
					Login
				</button>
				{error && <span className="text-red-600">{error.message}</span>}
			</form>
		</div>
	);
};

export default Login;
