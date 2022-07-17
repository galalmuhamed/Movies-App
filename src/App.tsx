import { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import GlobalStyles from './Components/styles/GlobalStyles';
import PopularMovie from './Pages/PopularMovie';
import TopRatedMovies from './Pages/TopRatedMovies';
import UpComing from './Pages/UpComing';
import MoviePage from './Pages/MoviePage';
import { MoviesContext } from './MoviesContext';
import Loading from './Components/LoadingSpinner';

const App: FC = () => {
	const { isLoading } = useContext(MoviesContext);
	console.log(isLoading);
	return (
		<>
			<GlobalStyles />
			{isLoading ? (
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/popularmovies" element={<PopularMovie />} />
					<Route path="/topratedmovies" element={<TopRatedMovies />} />
					<Route path="/upcomingmovies" element={<UpComing />} />
					<Route path="/movie/:id" element={<MoviePage />} />
				</Routes>
			) : (
				<Loading />
			)}
		</>
	);
};

export default App;
