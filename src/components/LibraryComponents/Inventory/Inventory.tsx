import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';

const Inventory = () => {
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
		console.log('Inventory');

		axios
			.get(`${baseURL}${ENDPOINTS.GET_ALL_BOOKS}`)
			.then((res) => {
				console.log(res.data);
				setBooks(res.data.books);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="max-w-5xl p-20 m-auto">
			<h1 className="text-2xl">Library Inventory</h1>
			<div>
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
						{books.map((book) => (
							<tr key={book._id}>
								<td className="table-cell p-4 bg-gray-50">{book.title}</td>
								<td className="p-4">{book.author}</td>
								<td className="p-4">{book.isbn}</td>
								<td className="p-4">{book.timesRead}</td>
							</tr>
						))}
					</tbody>
				</table>
				<AddBook />
			</div>
		</div>
	);
};

/** Component to add the book */
const AddBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [isbn, setISBN] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(title, author, description, isbn);
		axios
			.post(`${baseURL}${ENDPOINTS.NEW_BOOK}`, {
				title,
				author,
				description,
				isbn,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="max-w-5xl p-20 m-auto">
			<h1 className="text-2xl">Add Book</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
							Title
						</label>
						<input
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="title"
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="author">
							Author
						</label>
						<input
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="author"
							type="text"
							placeholder="Author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
							Description
						</label>
						<input
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="description"
							type="text"
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="isbn">
							ISBN
						</label>
						<input
							className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="isbn"
							type="text"
							placeholder="ISBN"
							value={isbn}
							onChange={(e) => setISBN(e.target.value)}
						/>
					</div>
					<div className="flex flex-col mt-4">
						<button
							className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Add Book
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Inventory;
