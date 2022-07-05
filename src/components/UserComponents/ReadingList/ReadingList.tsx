import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../Context/UserContext';

const ReadingList = () => {
	const userState = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<div className="max-w-5xl pt-20 m-auto">
			<div>
				<h1 className="text-3xl font-bold">Reading List</h1>
			</div>
			{userState?.user?.readingList ? (
				userState?.user?.readingList?.map((book) => {
					return (
						<div className="flex mt-4">
							<div onClick={() => navigate('/books/' + book._id)} key={book.isbn} className="p-6 bg-gray-50">
								<h1 className="text-lg font-bold">{book.title}</h1>
								<p className="text-base">
									Written by {book.author} <span> (ISBN#{book.isbn}) </span>
								</p>
								<p className="text-sm">{book.description}</p>
								<p className="mt-2 text-sm font-bold">{book.timesRead} bookworms are interested in this book</p>
							</div>
						</div>
					);
				})
			) : (
				<p className="text-gray-600">No books in your reading list</p>
			)}
		</div>
	);
};

export default ReadingList;
