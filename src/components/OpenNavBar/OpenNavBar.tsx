const OpenNavBar = () => {
	return (
		<div className="px-12 py-6 text-white bg-gradient-to-r from-black to-purple-500">
			<div className="flex items-center justify-between">
				<div>
					<a href="/">
						<h1 className="font-mono font-bold text-center">Bookworm 📚🪱</h1>
					</a>
				</div>
				<div id="menu-items">
					<ul className="flex items-center space-x-12 text-sm font-bold">
						<a href="/login">
							<li> 👤 User Login </li>
						</a>
						<a href="/library-login">
							<li> 📙 Library Admin Login </li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default OpenNavBar;
