import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';

const ReadingRadar = () => {
	const [books, setBooks] = useState([
		{
			_id: '',
			title: '',
			author: '',
			description: '',
			isbn: '',
			timesRead: 0,
		},
	]);

	useEffect(() => {
		console.log('ReadingRadar');
		axios
			.get(`${baseURL}${ENDPOINTS.TRENDING_BOOKS}`)
			.then((res) => {
				console.log(res.data);
				setBooks(res.data.books);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="max-w-6xl pt-10 m-auto">
			<div className="">
				<h1 className="text-2xl font-bold">Trending Books</h1>
				<table className="w-full mt-20 table-auto">
					<thead>
						<tr className="text-left">
							<th className="p-4">Title</th>
							<th className="p-4">Author</th>
							<th className="p-4">ISBN</th>
							<th className="p-4">Times Read</th>
						</tr>
					</thead>
					<tbody>
						{books?.map((book) => (
							<tr key={book._id}>
								<td className="table-cell p-4 bg-gray-50">{book.title}</td>
								<td className="p-4">{book.author}</td>
								<td className="p-4">{book.isbn}</td>
								<td className="p-4">{book.timesRead}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReadingRadar;
