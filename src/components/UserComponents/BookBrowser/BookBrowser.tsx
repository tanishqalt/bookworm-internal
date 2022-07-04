import UserContext from '../../../Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookBrowser = () => {
	const [books, setBooks] = useState([
		{
			_id: '',
			title: '',
			author: '',
			description: '',
			isbn: '',
			timesRead: 0,
			ratings: [],
		},
	]);

	const [keyword, setKeyword] = useState('');

	const userState = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (keyword !== '') {
			axios
				.get(`${baseURL}${ENDPOINTS.SEARCH_BOOKS}${keyword}`)
				.then((res) => {
					setBooks(res.data.books);
				})
				.catch((err) => {
					console.log(err);
				});

			return;
		}

		axios
			.get(`${baseURL}${ENDPOINTS.GET_ALL_BOOKS}`)
			.then((res) => {
				setBooks(res.data.books);
				console.log(res.data.books);
			})
			.catch((err) => console.log(err));
	}, [keyword]);

	return (
		<div>
			<div className="max-w-5xl pt-20 m-auto">
				<div>
					<h1 className="text-xl font-bold">Book Browser</h1>
					<p>Search and find the books in our library</p>
				</div>
				<div>
					<input
						type="text"
						className="p-3 my-4 border focus:ring-2"
						placeholder="Search for a book"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</div>
				<div className="mt-12">
					<div className="flex flex-wrap space-x-2">
						{books.map((book) => {
							return (
								<div onClick={() => navigate('/books/' + book._id)} key={book.isbn} className="p-6 bg-gray-50">
									<h1 className="text-lg font-bold">{book.title}</h1>
									<p className="text-base">
										Written by {book.author} <span> (ISBN#{book.isbn}) </span>
									</p>
									<p className="text-sm">{book.description}</p>
									<p className="text-sm">Times Read: {book.timesRead}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookBrowser;
