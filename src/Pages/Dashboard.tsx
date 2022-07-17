import React, { FC, useContext } from 'react';
import { Main } from '../Components/styles/Dashboard.styled';
import Header from '../Components/Header';
import Section from '../Components/Section';
import { MoviesContext } from '../MoviesContext';
const Dashboard: FC = () => {
	const { popularMovies, topRated, upComing } = useContext(MoviesContext);
	return (
		<Main>
			<Header />
			<Section
				title={'Popular Movies'}
				state={popularMovies}
				to={'/popularmovies'}
			/>
			<Section title={'Top Rated'} state={topRated} to={'/topratedmovies'} />
			<Section title={'Up Coming'} state={upComing} to={'/upcomingmovies'} />
		</Main>
	);
};

export default Dashboard;
