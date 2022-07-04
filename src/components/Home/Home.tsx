import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigator = useNavigate();

	return (
		<div className="min-h-screen bg-black">
			<div className="py-40 text-center">
				<h1 className="text-5xl font-bold text-white"> Welcome to Bookworm </h1>
				<p className="mt-4 text-white"> Review and rate books together</p>
				<button onClick={() => navigator('/login')} className="px-4 py-3 mt-8 text-sm bg-white rounded-sm ring-2">
					Get started with Bookworm here
				</button>
			</div>
		</div>
	);
};

export default Home;
