const LoginUser = () => {
	return (
		<div className="min-h-screen">
			<div className="max-w-lg pt-20 m-auto">
				<h1 className="text-xl font-bold"> Login to Bookworm </h1>
				<form>
					<div className="flex flex-col mt-4 space-y-4">
						<label htmlFor="username" className="">
							Username
						</label>
						<input type="text" id="username" className="w-full px-4 py-2 border-2 rounded-sm" />
						<label htmlFor="password" className="">
							Password
						</label>
						<input type="password" id="password" className="w-full px-4 py-2 border-2 rounded-sm" />
						<button className="px-4 py-2 mt-4 text-sm bg-white rounded-sm ring-2">Login</button>
						<p>
							Not a member yet? <a href="/register">Register</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginUser;
