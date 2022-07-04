import UserContext from '../../../Context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserProfile = () => {
	const userState = useContext(UserContext);
	const [bio, setBio] = useState(userState?.user?.bio);

	const handleUpdateBio = (e: any) => {
		e.preventDefault();
		console.log(bio);

		axios
			.post(`${baseURL}${ENDPOINTS.UPDATE_USER_BIO}`, {
				username: userState?.user?.username,
				bio: bio,
			})
			.then((res) => {
				console.log(res);
				// if the success message
				if (res.data.success) {
					toast.success(res.data.message);
					userState?.setUser(res.data.user);
				}
				// if the error message
				else {
					toast.error(res.data.message);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="min-h-screen p-10">
			<h1 className="text-2xl font-bold">User Profile</h1>
			<div className="flex space-x-4">
				<div className="w-1/3">
					<div className="mt-6">
						<div className="mt-6">
							<label className="font-semibold"> Bio </label>
							<textarea
								onChange={(e) => setBio(e.target.value)}
								name="name"
								value={bio}
								className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md"
								placeholder="John Doe"
							></textarea>
						</div>
						<button onClick={handleUpdateBio} className="px-3 py-4 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md">
							Update Profile
						</button>
					</div>
				</div>
				<div className="w-2/3 p-6">
					<div className="p-10 bg-gray-50">
						<p className="text-xs"> Details </p>
						<hr className="my-3" />

						<div>
							<p className="text-xs"> username </p>
							<label className="mt-2 font-semibold"> {userState?.user?.username} </label>
						</div>

						<div className="mt-4">
							<p className="text-xs"> Description </p>
							<label className="mt-2 font-medium">{userState?.user?.bio} </label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
