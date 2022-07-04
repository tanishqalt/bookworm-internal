import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const OpenNavBar = () => {
	const userState = useContext(UserContext);
	console.log('CONTEXT USER::', userState);

	return (
		<div className="px-12 py-6 text-white bg-gradient-to-r from-black to-purple-500">
			<div className="flex items-center justify-between">
				<div>
					<Link to="/">
						<h1 className="font-mono font-bold text-center">Bookworm 📚🪱</h1>
					</Link>
				</div>
				{userState?.user ? (
					<div id="menu-items">
						<ul className="flex items-center space-x-12 text-sm font-bold">
							<Link to="/user/book-browser">
								<li> 📚 Library </li>
							</Link>
							<Link to="/user/profile">
								<li> 🧑‍💻 Profile </li>
							</Link>
							<a href="/">
								<li> 🚪 Logout </li>
							</a>
						</ul>
					</div>
				) : (
					<div id="menu-items">
						<ul className="flex items-center space-x-12 text-sm font-bold">
							<Link to="/login">
								<li> 👤 User Login </li>
							</Link>
							<Link to="/library-login">
								<li> 📙 Library Admin Login </li>
							</Link>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default OpenNavBar;
