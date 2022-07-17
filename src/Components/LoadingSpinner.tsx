import React from 'react';
import { Container } from './styles/Loading.styled';

const Loading = () => {
	return (
		<Container className="spinner-container">
			<div className="loading-spinner"></div>
		</Container>
	);
};

export default Loading;
