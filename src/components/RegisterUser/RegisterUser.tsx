import { useState } from 'react';
import { ENDPOINTS, baseURL } from '../../utils/Endpoints';
import toast from 'react-hot-toast';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const userState = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// incase either of three are empty, show error
		if (username === '' || password === '' || email === '') {
			toast.error('Please enter a username, password, and email');
			return;
		}

		// if all three are not empty, send a request to the server
		axios
			.post(`${baseURL}${ENDPOINTS.USER_REGISTER}`, {
				username,
				password,
				email,
			})
			.then((res) => {
				// if the request is successful, redirect the user to the home page
				if (res.data.success) {
					toast.success('Registration successful');
					userState?.setUser(res.data.newUser);
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

		console.log(username, password, email);
	};

	return (
		<div>
			<div className="min-h-screen">
				<div className="max-w-lg pt-20 m-auto">
					<h1 className="text-xl font-bold"> Register on Bookworm </h1>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col mt-4 space-y-4">
							<label htmlFor="username" className="">
								Username
							</label>
							<input onChange={(e) => setUsername(e.target.value)} type="text" id="username" className="w-full px-4 py-2 border-2 rounded-sm" />
							<label htmlFor="email" className="">
								Email
							</label>
							<input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="w-full px-4 py-2 border-2 rounded-sm" />
							<label htmlFor="password" className="">
								Password
							</label>
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								id="password"
								className="w-full px-4 py-2 border-2 rounded-sm"
							/>
							<button type="submit" className="px-4 py-2 mt-4 text-sm bg-white rounded-sm ring-2">
								Register
							</button>
							<p>
								Already a member? <a href="/login">Login</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterUser;
