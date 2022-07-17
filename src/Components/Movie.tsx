import React, { FC } from 'react';
import { PopularMovies } from '../types/types';
import {
	Li,
	ImgContainer,
	InfoContainer,
	Score,
} from './styles/Dashboard.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface Props {
	movie: PopularMovies;
}

const Movie: FC<Props> = ({ movie }) => {
	const img = 'http://image.tmdb.org/t/p/w500/';
	const vote = movie.vote_average * 10;
	const date = moment(movie.release_date).format('MMM Do YY');

	return (
		<Li>
			<ImgContainer to={`/movie/${movie.id}`}>
				<img src={`${img}${movie.poster_path}`} alt={movie.title} />
			</ImgContainer>
			<InfoContainer>
				<Score>
					<CircularProgressbar
						value={movie.vote_average}
						maxValue={10}
						text={`${movie.vote_average * 10}%`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: 'white',
							textColor: 'black',
							pathColor: vote > 70 ? 'green' : vote <= 50 ? 'red' : 'yellow',
							trailColor: 'transparent',
							textSize: '22px',
						})}
					/>
				</Score>
				<Link to={`/movie/${movie.id}`}>{movie.title}</Link>
				<p>{date}</p>
			</InfoContainer>
		</Li>
	);
};

export default Movie;
