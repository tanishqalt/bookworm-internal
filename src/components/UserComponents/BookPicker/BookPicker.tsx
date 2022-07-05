import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ENDPOINTS, baseURL } from '../../../utils/Endpoints';

const BookPicker = () => {
	const navigate = useNavigate();

	const [randomBook, setRandomBook] = useState({
		_id: '',
		title: '',
		description: '',
		isbn: '',
		author: '',
		timesRead: 0,
	});

	useEffect(() => {
		axios
			.get(`${baseURL}${ENDPOINTS.RANDOM}`)
			.then((res) => {
				console.log(res.data);
				setRandomBook(res.data.randomBook);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div className="max-w-6xl pt-20 m-auto font-bold">
				<h1 className="text-5xl">Your book of the day is 😲 </h1>
				<div onClick={() => navigate('/books/' + randomBook._id)} key={randomBook.isbn} className="p-6 bg-gray-50">
					<h1 className="text-lg font-bold">{randomBook.title}</h1>
					<p className="text-base">
						Written by {randomBook.author} <span> (ISBN#{randomBook.isbn}) </span>
					</p>
					<p className="text-sm">{randomBook.description}</p>
					<p className="mt-2 text-sm font-bold">{randomBook.timesRead} bookworms are interested in this book</p>
				</div>
			</div>
		</div>
	);
};

export default BookPicker;
