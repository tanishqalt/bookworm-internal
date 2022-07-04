import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';
import UserContext from '../../../Context/UserContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const SingleBook = () => {
	// get the param ids
	const { id } = useParams();
	const [book, setBook] = useState({
		_id: '',
		title: '',
		author: '',
		description: '',
		isbn: '',
		timesRead: 0,
		ratings: [],
	});

	const [currentRating, setCurrentRating] = useState(1);

	const userState = useContext(UserContext);

	useEffect(() => {
		console.log(id);
		axios
			.get(`${baseURL}${ENDPOINTS.GET_BOOK}${id}`)
			.then((res) => {
				console.log(res.data);
				setBook(res.data.book);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.post(`${baseURL}${ENDPOINTS.UPDATE_TIMES_READ}`, {
				id: id,
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleAddToReadingList = () => {
		console.log('add to reading list');
		axios
			.post(`${baseURL}${ENDPOINTS.UPDATE_USER_READING_LIST}`, {
				username: userState?.user?.username,
				book: book,
			})
			.then((res) => {
				console.log(res);
				// if it is successful, update the user state
				toast.success('Added to reading list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateBookRating = () => {
		// axios.post(`${baseURL}${ENDPOINTS.UPDATE_BOOK_RATING}`);
		console.log('update book rating');
		console.log(currentRating);

		const ratingObject = {
			username: userState?.user?.username,
			rating: currentRating,
		};

		const requestObject = {
			id: id,
			rating: ratingObject,
		};

		axios
			.post(`${baseURL}${ENDPOINTS.UPDATE_BOOK_RATING}`, requestObject)
			.then((res) => {
				console.log(res);
				toast.success(res.data.message);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSelectOnChange = (e: any) => {
		setCurrentRating(e.target.value);
	};

	return (
		<div>
			<div className="max-w-5xl pt-20 m-auto">
				<h1 className="text-4xl font-bold">{book.title}</h1>
				<p className="text-sm">ISBN# {book.isbn}</p>
				<p className="mt-4">Description: {book.description}</p>
				{book.ratings.length > 0 ? <div></div> : <p className="mt-4 text-gray-600">No ratings yet</p>}
				<hr className="my-4" />
				<p className="text-red-700 ">This book has been read {book.timesRead} times! </p>
				<p className="mt-8 italic">Author: {book.author}</p>

				<div>
					<button onClick={() => handleAddToReadingList()} className="p-3 mt-4 text-white bg-black rounded-xl">
						Add to reading list
					</button>
				</div>
				<hr className="mt-7" />
				<p className="my-4">Ratings </p>
				{book.ratings.map((rating: Rating) => {
					return (
						<div className="flex space-y-4">
							<p className="text-sm">
								{rating.username} rated this book {rating.rating}/5
							</p>
						</div>
					);
				})}

				<hr className="my-4" />

				<div>
					<p> Rate the book</p>
				</div>
				<select value={currentRating} onChange={handleSelectOnChange}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<button onClick={() => updateBookRating()} className="p-3 mt-4 text-white bg-black rounded-xl">
					Rate
				</button>
			</div>
		</div>
	);
};

type Rating = {
	username: string;
	rating: number;
};
export default SingleBook;
