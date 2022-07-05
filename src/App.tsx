import { createContext, useState } from 'react';
import './App.css';
import Router from './BookwormRouter/Router';
import OpenNavBar from './components/OpenNavBar/OpenNavBar';
import UserContext from './Context/UserContext';

function App() {
	const [currentuser, setCurrentUser] = useState(null);

	const handleUserChange = (user: any) => {
		setCurrentUser(user);
	};

	return (
		<div>
			<UserContext.Provider
				value={{
					user: currentuser,
					setUser: handleUserChange,
				}}
			>
				<Router />
			</UserContext.Provider>
		</div>
	);
}

export default App;

type User = {
	_id: string;
	username: string;
	email: string;
	password: string;
	bio: string;
	readingList: Array<any>;
	userType: string;
};
