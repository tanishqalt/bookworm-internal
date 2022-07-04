import UserContext from '../../../Context/UserContext';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { baseURL, ENDPOINTS } from '../../../utils/Endpoints';

const RequestForm = () => {
	const [bookTitle, setBookTitle] = useState('');
	const [bookAuthor, setBookAuthor] = useState('');

	const userState = useContext(UserContext);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// if book empty
		if (!bookTitle || !bookAuthor) {
			toast.error('Please fill out all fields');
			return;
		}

		const requestObj = {
			username: userState?.user?.username,
			bookTitle: bookTitle,
			bookAuthor: bookAuthor,
		};

		axios
			.post(`${baseURL}${ENDPOINTS.REQUEST_NEW_BOOK}`, requestObj)
			.then((res) => {
				console.log(res.data);
				toast.success('Request sent');
				setBookTitle('');
				setBookAuthor('');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="max-w-lg p-10 m-auto">
			<h1 className="text-2xl font-medium">Request Form</h1>
			<p className="mt-2">Hi! You can request a specific book and we will work with our library providers to fetch the specific book.</p>

			<div className="mt-10 space-y-4">
				<div>
					<label className="text-sm font-medium">Book Title</label>
					<input
						onChange={(e) => setBookTitle(e.target.value)}
						className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md"
						type="text"
						value={bookTitle}
						placeholder="Enter book title"
					/>
				</div>

				<div>
					<label className="mt-4 text-sm font-medium">Book Author</label>
					<input
						onChange={(e) => setBookAuthor(e.target.value)}
						className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md"
						type="text"
						value={bookAuthor}
						placeholder="Enter book author"
					/>
				</div>

				<div>
					<button onClick={(e) => handleSubmit(e)} className="w-full px-3 py-4 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md">
						<label className="text-sm font-medium">Request Book</label>
					</button>
				</div>
			</div>
		</div>
	);
};

export default RequestForm;
