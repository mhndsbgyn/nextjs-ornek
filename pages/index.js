import Head from 'next/head'
import Jumbo from '../components/Jumbo';

import Popular from '../components/popular';

function Home({movies}) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
             <Jumbo/>
			<Popular movies={movies} />
		</>
	)
}

export async function getServerSideProps() {
	const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=en-US&page=1`);
	const movies = await request.json();
	return {
		props: {
			movies,
		},
	}
}

export default Home