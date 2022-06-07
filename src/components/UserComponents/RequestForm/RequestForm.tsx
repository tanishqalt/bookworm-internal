const RequestForm = () => {
	return (
		<div className="max-w-lg p-10 m-auto">
			<h1 className="text-2xl font-medium">Request Form</h1>
			<p className="mt-2">Hi! You can request a specific book and we will work with our library providers to fetch the specific book.</p>

			<div className="mt-10 space-y-4">
				<div>
					<label className="text-sm font-medium">Book Title</label>
					<input className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter book title" />
				</div>

				<div>
					<label className="mt-4 text-sm font-medium">Book Author</label>
					<input className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter book author" />
				</div>

				<div>
					<label className="mt-4 text-sm font-medium">Book Publisher</label>
					<input className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter book publisher" />
				</div>

				<div>
					<label className="mt-4 text-sm font-medium">Book ISBN</label>
					<input className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter book ISBN" />
				</div>
				<div>
					<button className="w-full px-3 py-4 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md">
						<label className="text-sm font-medium">Request Book</label>
					</button>
				</div>
			</div>
		</div>
	);
};

export default RequestForm;
