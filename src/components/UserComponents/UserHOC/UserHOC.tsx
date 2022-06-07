import UserNavigation from '../UserNavigation/UserNavigation';

/**
 *
 * @param props The component you need inside the authenticated USER HOC
 * @returns
 */
const UserHOC = (props: any) => {
	return (
		<>
			<UserNavigation />
			{props.children}
		</>
	);
};

export default UserHOC;
