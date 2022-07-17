import React, { useEffect, useState, FC } from 'react';
import Movie from './Movie';
import { Nav, Ol, BtnContainer } from './styles/Pages.styled';
import axios, { AxiosInstance } from 'axios';
import { PopularMovies } from '../types/types';

const api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});
interface Props {
	title: string;
	url: string;
}

const MoviesPages: FC<Props> = ({ title, url }) => {
	const [data, setData] = useState<PopularMovies[]>([]);
	const [nextPage, setNextPage] = useState(1);

	const getData = async (nextPage: number) => {
		try {
			if (nextPage > 500) return;
			const res = await api.get(
				`/${url}?${process.env.REACT_APP_API_KEY}&language=en-US&page=${nextPage}`
			);
			console.log(res);
			return res.data;
		} catch (err) {
			throw new Error('Cannot Get all data');
		}
	};
	const getNextData = () => {
		getData(nextPage).then(random => {
			console.log(random);
			if (random === undefined) return;
			const test = [...data, ...random.results];
			setData(test);
			setNextPage(random.page + 1);
		});
	};
	useEffect(() => {
		getNextData();
	}, []);

	return (
		<>
			<Nav>{title}</Nav>
			<Ol>
				{data.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</Ol>
			<BtnContainer>
				<button onClick={() => getNextData()}>See More</button>
			</BtnContainer>
		</>
	);
};

export default MoviesPages;
