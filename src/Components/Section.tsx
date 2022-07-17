import React, { FC } from 'react';
import {
	SectionContainer,
	TitleSectionContainer,
	MoviesContainer,
} from './styles/Dashboard.styled';
import Movie from './Movie';
import { PopularMovies } from '../types/types';
import { Link } from 'react-router-dom';

interface Props {
	title: string;
	state: PopularMovies[];
	to: string;
}

const Section: FC<Props> = ({ title, state, to }) => {
	return (
		<SectionContainer>
			<TitleSectionContainer>
				<h1>{title}</h1>
				<Link to={to}>See More</Link>
			</TitleSectionContainer>
			<MoviesContainer>
				{state.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MoviesContainer>
		</SectionContainer>
	);
};

export default Section;
