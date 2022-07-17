import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import { MovieType } from '../types/types';
import {
	Container,
	BackGround,
	Box,
	ImgContainer,
	InfoContainer,
	Title,
	SubTitle,
	CircleContainer,
	Circle,
	TagLine,
	OverView,
} from '../Components/styles/MoviePage.styled';
import moment from 'moment';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LoadingSpinner from '../Components/LoadingSpinner';

const api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const MoviePage = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState<MovieType | undefined>();
	const [loading, setLoading] = useState(false);
	const img = 'http://image.tmdb.org/t/p/original/';
	const getMovie = async () => {
		const res = await api.get(
			`https://api.themoviedb.org/3/movie/${id}?${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		setMovie(res.data);
		setLoading(true);
	};
	useEffect(() => {
		getMovie();
	}, []);
	const style = {
		backgroundImage: `url(${img + movie?.backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};
	const year = movie && new Date(movie.release_date);
	console.log(movie && movie);
	const releaseDate = movie && moment(movie.release_date).format('DD/MM/YYYY');
	const geners = movie && movie.genres.map(genere => genere.name);

	const time_convert = (num: number) => {
		var hours = Math.floor(num / 60);
		var minutes = num % 60;
		if (!hours) {
			return minutes + 'm';
		} else {
			return hours + 'h' + minutes + 'm';
		}
	};
	const voteAvarage = movie && movie.vote_average;
	const vote = voteAvarage && voteAvarage * 10;

	return (
		<>
			{loading ? (
				<Container>
					<BackGround style={style}>
						<div
							style={{
								backgroundColor: 'black',
								width: '100%',
								height: '100%',
								opacity: 0.7,
							}}
						></div>
					</BackGround>
					<Box>
						<ImgContainer>
							<img src={img + movie?.poster_path} alt={movie?.title} />
						</ImgContainer>
						<InfoContainer>
							<Title>
								<h1>
									{movie?.title}
									<span>{` (${year?.getFullYear()})`}</span>
								</h1>
							</Title>
							<SubTitle>{`${releaseDate} • ${geners?.join(', ')} • ${
								movie && time_convert(movie.runtime)
							}`}</SubTitle>
							<CircleContainer>
								<Circle>
									<CircularProgressbar
										value={voteAvarage as unknown as number}
										maxValue={10}
										text={`${(voteAvarage as unknown as number) * 10}%`}
										background
										backgroundPadding={6}
										styles={buildStyles({
											backgroundColor: 'white',
											textColor: 'black',
											pathColor:
												(vote as unknown as number) > 70
													? 'green'
													: (vote as unknown as number) <= 50
													? 'red'
													: 'yellow',
											trailColor: 'transparent',
											textSize: '22px',
										})}
									/>
								</Circle>
								<p>User Score</p>
							</CircleContainer>
							{movie?.tagline && <TagLine>{movie.tagline}</TagLine>}
							{movie?.overview && (
								<OverView>
									<div>OverView</div>
									<p>{movie.overview}</p>
								</OverView>
							)}
						</InfoContainer>
					</Box>
				</Container>
			) : (
				<LoadingSpinner />
			)}
		</>
	);
};

export default MoviePage;
