import styled from 'styled-components';

export const Nav = styled.nav`
	min-height: 60px;
	background-color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	color: white;
	font-family: 'Roboto', sans-serif;
	font-style: italic;
`;
export const Ol = styled.ol`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0 20px;
	& > li {
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 2px 8px rgb(0 0 0 / 40%);
		margin: 10px;
	}
`;
export const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	& > button {
		outline: none;
		border: none;
		background-color: grey;
		padding: 8px 20px;
		border-radius: 20px;
		cursor: pointer;
		color: white;
		font-family: 'Roboto', sans-serif;
		font-size: 22px;
	}
`;
