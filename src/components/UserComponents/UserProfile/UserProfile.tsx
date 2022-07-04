import UserContext from '../../../Context/UserContext';
import { useContext, useEffect, useState } from 'react';

const UserProfile = () => {
	const userState = useContext(UserContext);
	const [bio, setBio] = useState(userState?.user?.bio);

	const handleUpdateBio = (e: any) => {
		e.preventDefault();
	};

	return (
		<div className="min-h-screen p-10">
			<h1 className="text-2xl font-bold">User Profile</h1>
			<div className="flex space-x-4">
				<div className="w-1/3">
					<div className="mt-6">
						<div className="mt-6">
							<label className="font-semibold"> Bio </label>
							<textarea name="name" className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md" placeholder="John Doe"></textarea>
						</div>
						<button className="px-3 py-4 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md">Update Profile</button>
					</div>
				</div>
				<div className="w-2/3 p-6">
					<div className="p-10 bg-gray-50">
						<p className="text-xs"> Details </p>
						<hr className="my-3" />

						<div>
							<p className="text-xs"> Name </p>
							<label className="mt-2 font-semibold"> Tanishq Sharma </label>
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
