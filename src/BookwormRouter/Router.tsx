import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Inventory from '../components/LibraryComponents/Inventory/Inventory';
import LibraryHOC from '../components/LibraryComponents/LibraryHOC';
import ListOfUsers from '../components/LibraryComponents/ListOfUsers/ListOfUsers';
import ReadingRadar from '../components/LibraryComponents/ReadingRadar/ReadingRadar';
import RequestList from '../components/LibraryComponents/RequestList/RequestList';
import LoginLibrary from '../components/LoginLibrary/LoginLibrary';
import LoginUser from '../components/LoginUser/LoginUser';
import OpenNavBar from '../components/OpenNavBar/OpenNavBar';
import RegisterLibrary from '../components/RegisterLibrary/RegisterLibrary';
import RegisterUser from '../components/RegisterUser/RegisterUser';
import BookBrowser from '../components/UserComponents/BookBrowser/BookBrowser';
import SingleBook from '../components/UserComponents/BookBrowser/SingleBook';
import BookPicker from '../components/UserComponents/BookPicker/BookPicker';
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
			<Toaster />
			<OpenNavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/library-login" element={<LoginLibrary />} />
				<Route path="/library-register" element={<RegisterLibrary />} />
				<Route
					path="/library/inventory"
					element={
						<LibraryHOC>
							<Inventory />
						</LibraryHOC>
					}
				/>
				<Route
					path="/library/reading-radar"
					element={
						<LibraryHOC>
							<ReadingRadar />
						</LibraryHOC>
					}
				/>
				<Route
					path="/library/users"
					element={
						<LibraryHOC>
							<ListOfUsers />
						</LibraryHOC>
					}
				/>
				<Route
					path="/library/requests"
					element={
						<LibraryHOC>
							<RequestList />
						</LibraryHOC>
					}
				/>
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
					path="/user/pick"
					element={
						<UserHOC>
							<BookPicker />
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
				<Route
					path="/books/:id"
					element={
						<UserHOC>
							<SingleBook />
						</UserHOC>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
