import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import LoginLibrary from '../components/LoginLibrary/LoginLibrary';
import LoginUser from '../components/LoginUser/LoginUser';
import RegisterLibrary from '../components/RegisterLibrary/RegisterLibrary';
import RegisterUser from '../components/RegisterUser/RegisterUser';
import BookBrowser from '../components/UserComponents/BookBrowser/BookBrowser';
import ReadingList from '../components/UserComponents/ReadingList/ReadingList';
import RequestForm from '../components/UserComponents/RequestForm/RequestForm';
import UserHOC from '../components/UserComponents/UserHOC/UserHOC';
import UserNavigation from '../components/UserComponents/UserNavigation/UserNavigation';
import UserProfile from '../components/UserComponents/UserProfile/UserProfile';

/**
 * Setting up a custom router
 * @returns {JSX.Element}
 */
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/library-login" element={<LoginLibrary />} />
				<Route path="/library-register" element={<RegisterLibrary />} />
				<Route path="/login" element={<LoginUser />} />
				<Route path="/register" element={<RegisterUser />} />
				<Route
					path="/user"
					element={
						<UserHOC>
							<UserProfile />
						</UserHOC>
					}
				/>
				<Route
					path="/user/profile"
					element={
						<UserHOC>
							<UserProfile />
						</UserHOC>
					}
				/>
				<Route
					path="/user/request"
					element={
						<UserHOC>
							<RequestForm />
						</UserHOC>
					}
				/>
				<Route
					path="/user/reading-list"
					element={
						<UserHOC>
							<ReadingList />
						</UserHOC>
					}
				/>
				<Route
					path="/user/book-browser"
					element={
						<UserHOC>
							<BookBrowser />
						</UserHOC>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;