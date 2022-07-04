import UserNavigation from '../UserNavigation/UserNavigation';
import { useContext, useEffect } from 'react';
import UserContext from '../../../Context/UserContext';

/**
 *
 * @param props The component you need inside the authenticated USER HOC
 * @returns
 */
const UserHOC = (props: any) => {
	const userState = useContext(UserContext);

	// check if user is logged in
	useEffect(() => {
		if (!userState?.user) {
			// if not, redirect to login page
			window.location.href = '/login';
		}
	}, [userState?.user]);

	return (
		<>
			{/* <UserNavigation /> */}
			{props.children}
		</>
	);
};

export default UserHOC;
