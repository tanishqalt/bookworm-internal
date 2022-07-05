import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';

const ListOfUsers = () => {
	const [users, setUsers] = useState([
		{
			_id: '',
			username: '',
			email: '',
			bio: '',
		},
	]);

	useEffect(() => {
		axios
			.get(`${baseURL}${ENDPOINTS.GET_ALL_USERS}`)
			.then((res) => {
				setUsers(res.data.users);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="p-20 m-auto max-w-8xl">
			<h1 className="text-2xl">All Users</h1>
			<div>
				<table className="w-full mt-20 table-auto">
					<thead>
						<tr className="text-left">
							<th className="p-4">Username</th>
							<th className="p-4">Email</th>
							<th className="p-4">Bio Read</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user) => (
							<tr key={user._id}>
								<td className="p-4">{user.username}</td>
								<td className="p-4">{user.email}</td>
								<td className="p-4">{user.bio}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListOfUsers;
