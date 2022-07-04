import { useContext, useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../utils/Endpoints';
import toast from 'react-hot-toast';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const userState = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (userState?.user) {
			navigate('/user/book-browser');
		}
	}, [userState?.user]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// if the username and password are empty, display a message
		if (username === '' || password === '') {
			toast.error('Please enter a username and password');
			return;
		}

		// if the username and password are not empty, send a request to the server
		axios
			.post(`${baseURL}${ENDPOINTS.USER_LOGIN}`, {
				username,
				password,
			})
			.then((res) => {
				// if the request is successful, redirect the user to the home page
				if (res.data.success) {
					toast.success('Login successful');
					userState?.setUser(res.data.user);
					navigate('/user/book-browser');
				}
				// if the request is not successful, display a message
				else {
					toast.error(res.data.message);
				}
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div className="min-h-screen">
			<div className="max-w-lg pt-20 m-auto">
				<h1 className="text-xl font-bold"> Login to Bookworm </h1>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col mt-4 space-y-4">
						<label htmlFor="username" className="">
							Username
						</label>
						<input onChange={(e) => setUsername(e.target.value)} type="text" id="username" className="w-full px-4 py-2 border-2 rounded-sm" />
						<label htmlFor="password" className="">
							Password
						</label>
						<input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full px-4 py-2 border-2 rounded-sm" />
						<button type="submit" className="px-4 py-2 mt-4 text-sm bg-white rounded-sm ring-2">
							Login
						</button>
						<p>
							Not a member yet? <a href="/register">Register</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginUser;
