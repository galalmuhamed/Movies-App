import React from 'react';
import {
	Container,
	BackGround,
	BoxContainer,
	TitleContainer,
	InputContainer,
} from './styles/Dashboard.styled';

const Header = () => {
	return (
		<Container>
			<BackGround></BackGround>
			<BoxContainer>
				<TitleContainer>
					<h1>Welcome.</h1>
					<h3>
						Millions of movies, TV shows and people to discover. Explore now.
					</h3>
				</TitleContainer>
				<InputContainer>
					<input placeholder="Search For a Movie ......" />
					<button>Search</button>
				</InputContainer>
			</BoxContainer>
		</Container>
	);
};

export default Header;
