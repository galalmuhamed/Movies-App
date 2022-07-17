import React, { createContext, FC, useState, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import { PopularMovies } from './types/types';

const api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

interface MoviesContextType {
	popularMovies: PopularMovies[];
	topRated: PopularMovies[];
	upComing: PopularMovies[];
	isLoading: boolean;
}

interface Props {
	children: JSX.Element | null;
}

export const MoviesContext = createContext<MoviesContextType>({
	popularMovies: [],
	topRated: [],
	upComing: [],
	isLoading: false,
});

const MoviesProvider: FC<Props> = ({ children }) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [upComing, setUpComing] = useState([]);
	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		getAllMovies();
	}, []);
	const getAllMovies = () => {
		try {
			return Promise.all([
				api.get(
					`/popular?${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
				),
				api.get(
					`/top_rated?${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
				),
				api.get(
					`/upcoming?${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
				),
			]).then(([popularMovies, topRated, upComing]) => {
				setPopularMovies(popularMovies.data.results);
				setTopRated(topRated.data.results);
				setUpComing(upComing.data.results);
				setisLoading(true);
			});
		} catch (err) {
			throw new Error(`Cannot Get All Movies ${err}`);
		}
	};
	return (
		<MoviesContext.Provider
			value={{ popularMovies, topRated, upComing, isLoading }}
		>
			{children}
		</MoviesContext.Provider>
	);
};
export default MoviesProvider;

/*
export const getPopularMovies = async () => {
	try {
		const res = await api.get(
			`/upcoming?${process.env.REACT_APP_API_KEY}&language=en-US&page=2`
		);
		const movie = await api.get(
			`/628900?${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		console.log(res.data.results);
		console.log(movie);
	} catch (err) {
		throw new Error(`Cannot Get Popular Movies ${err}`);
	}
};

*/
