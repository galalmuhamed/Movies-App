import React, { FC } from 'react';
import MoviesPages from '../Components/Pages';

const PopularMovie: FC = () => {
	return <MoviesPages title="Popular Movies" url="popular" />;
};

export default PopularMovie;
