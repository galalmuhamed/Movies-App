import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	padding: 40px 50px;
`;
export const BackGround = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`;
export const Box = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;
export const ImgContainer = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	& > img {
		width: 100%;
		border-radius: 10px;
		object-fit: cover;
	}
`;
export const InfoContainer = styled.div`
	flex: 0.7;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20px;
`;
export const Title = styled.div`
	color: white;
	font-family: 'Roboto', sans-serif;
	& > h1 {
		font-size: 35px;
		& > span {
			color: gray;
		}
	}
`;
export const SubTitle = styled.div`
	color: white;
	font-weight: 500;
	letter-spacing: 1px;
`;
export const CircleContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;

	& > p {
		margin-left: 10px;
		color: white;
		font-weight: bold;
		letter-spacing: 1px;
	}
`;
export const Circle = styled.div`
	width: 70px;
`;
export const TagLine = styled.div`
	color: grey;
	font-family: 'Roboto', sans-serif;
	font-style: italic;
`;
export const OverView = styled.div`
	margin-top: 20px;
	& > :nth-child(1) {
		margin-bottom: 15px;
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		color: white;
	}
	& > :nth-child(2) {
		color: white;
	}
`;
