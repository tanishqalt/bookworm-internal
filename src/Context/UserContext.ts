/**
 * User Context
 */
import { createContext } from 'react';

const UserContext = createContext<UserContextType | null>(null);

type UserContextType = {
	user: User | null;
	setUser: (user: User) => void;
};

type User = {
	_id: string;
	username: string;
	email: string;
	password: string;
	bio: string;
	userType: string;
	readingList: Array<any>;
};

export default UserContext;
