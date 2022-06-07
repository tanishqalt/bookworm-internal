const UserNavigation = () => {
	return (
		<div className="px-6 py-3 bg-gradient-to-r from-black to-purple-500 backdrop-blur-md">
			<hr className="opacity-50" />
			<ul className="flex mt-3 space-x-6 text-sm font-medium">
				<a href="/user/profile">
					<li className="text-white"> Profile </li>
				</a>
				<a href="/user/reading-list">
					<li className="text-white"> Reading List </li>
				</a>
				<a href="/user/request">
					<li className="text-white"> Request Form </li>
				</a>
				<a href="/user/book-browser">
					<li className="text-white"> Book Browser </li>
				</a>
			</ul>
		</div>
	);
};

export default UserNavigation;
