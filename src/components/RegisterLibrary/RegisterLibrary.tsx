const RegisterLibrary = () => {
	return (
		<div>
			<div className="min-h-screen">
				<div className="max-w-lg pt-20 m-auto">
					<h1 className="text-xl font-bold"> Register Your Library </h1>
					<form>
						<div className="flex flex-col mt-4 space-y-4">
							<label htmlFor="username" className="">
								Username
							</label>
							<input type="text" id="username" className="w-full px-4 py-2 border-2 rounded-sm" />
							<label htmlFor="email" className="">
								Email
							</label>
							<input type="text" id="email" className="w-full px-4 py-2 border-2 rounded-sm" />
							<label htmlFor="password" className="">
								Password
							</label>
							<input type="password" id="password" className="w-full px-4 py-2 border-2 rounded-sm" />
							<button className="px-4 py-2 mt-4 text-sm bg-white rounded-sm ring-2">Register</button>
							<p>
								Already a registerd Library? <a href="/library-login">Login</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterLibrary;
