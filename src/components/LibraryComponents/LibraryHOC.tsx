import { Link } from 'react-router-dom';

const LibraryHOC = (props: any) => {
	return (
		<div>
			<div className="p-10">
				<div id="menu-items">
					<ul className="flex items-center space-x-12 text-sm font-bold">
						<Link to="/library/reading-radar">
							<li> 📚 Reading Radar / Trending </li>
						</Link>
						<Link to="/library/inventory">
							<li> 📚 Inventory </li>
						</Link>
						<Link to="/library/users">
							<li> 📚 All Users </li>
						</Link>
						<Link to="/library/requests">
							<li> 📚 All Requests </li>
						</Link>
					</ul>
				</div>
			</div>
			{props.children}
		</div>
	);
};

export default LibraryHOC;
