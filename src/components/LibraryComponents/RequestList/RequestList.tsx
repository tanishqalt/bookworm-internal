import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';

const RequestList = () => {
	const [requests, setRequests] = useState([
		{
			id: '',
			bookTitle: '',
			bookAuthor: '',
			username: '',
		},
	]);

	useEffect(() => {
		axios
			.get(`${baseURL}${ENDPOINTS.GET_ALL_REQUESTS}`)
			.then((res) => {
				console.log(res.data);
				setRequests(res.data.requests);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="max-w-5xl pt-20 m-auto">
			<h1 className="text-4xl">Request List</h1>
			<div>
				<table className="w-full mt-20 table-auto">
					<thead>
						<tr className="text-left">
							<th className="p-4">Title</th>
							<th className="p-4">Author</th>
							<th className="p-4">Requester</th>
						</tr>
					</thead>
					<tbody>
						{requests &&
							requests.map((request) => (
								<tr key={request.id}>
									<td className="p-4">{request.bookTitle}</td>
									<td className="p-4">{request.bookAuthor}</td>
									<td className="p-4">{request.username}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RequestList;
