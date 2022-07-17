import styled from 'styled-components';
import Cover from '../../Assets/cover.jpg';
import { Link } from 'react-router-dom';

export const Main = styled.main``;

//Header
export const Container = styled.header`
	width: 100%;
	height: 40vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BackGround = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-image: url(${Cover});
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	filter: grayscale(100%);
	z-index: -1;
`;

export const BoxContainer = styled.div`
	width: 100%;
	padding: 30px 40px;
`;
export const TitleContainer = styled.div`
	color: white;
	font-family: 'Roboto', sans-serif;
	& > :nth-child(1) {
		font-size: 60px;
		font-weight: 700;
	}
	& > :nth-child(2) {
		font-size: 30px;
		font-weight: 600;
	}
`;
export const InputContainer = styled.div`
	margin-top: 40px;
	width: 100%;
	background-color: white;
	border-radius: 20px;
	padding: 10px 20px;
	position: relative;
	& > input {
		width: 100%;
		border: none;
		outline: none;
		height: 30px;
		font-size: 18px;
		&::-webkit-input-placeholder {
			font-size: 18px;
		}
	}
	& > button {
		outline: none;
		border: none;
		background-color: grey;
		border-radius: 20px;
		height: 100%;
		padding: 10px;
		font-weight: 600;
		cursor: pointer;
		color: white;
		position: absolute;
		top: 0;
		right: -1px;
		width: 100px;
		font-size: 18px;
	}
`;
// section component
export const SectionContainer = styled.div`
	width: 80%;
	margin: 10px auto;
`;
export const TitleSectionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > :nth-child(2) {
		color: black;
		text-decoration: none;
		font-size: 12px;
		font-weight: 600;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const MoviesContainer = styled.ol`
	width: 100%;
	list-style-type: none;
	display: flex;
	padding-top: 20px;
	padding-bottom: 20px;
	overflow-y: hidden;
	overflow-x: scroll;
	scrollbar-width: thin;
	scrollbar-color: #6969dd #e0e0e0;

	&::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: darkgray;
		border-radius: 20px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

//movie compnent

export const Li = styled.li`
	margin: 5px;
	min-width: 180px;
	max-width: 180px;
`;
export const ImgContainer = styled(Link)`
	width: 100%;
	border-radius: 10px;
	text-decoration: none;
	color: black;
	display: block;
	& > img {
		width: 100%;
		object-fit: contain;
		border-radius: 10px;
	}
`;
export const InfoContainer = styled.div`
	position: relative;
	padding: 15px 10px 10px 10px;
	& > :nth-child(2) {
		font-family: 'Roboto', sans-serif;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
		color: black;
		display: block;
		&:hover {
			text-decoration: underline;
		}
	}
	& > :nth-child(3) {
		color: gray;
	}
`;

export const Score = styled.div`
	position: absolute;
	background-color: white;
	top: -30px;
	left: 10px;
	border-radius: 50%;
	width: 40px;
	font-weight: bold;
`;
