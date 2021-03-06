import styled from "styled-components/macro";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 100vh;
	width: 100%;
	background: linear-gradient(
		45deg,
		${props => props.theme.light} 0%,
		${props => props.theme.dark} 100%
	);
	background: ${props => props.theme.light};
	color: ${props => props.theme.text};
	display: flex;
	align-items: center;
	position: relative;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 0 10%;

	@media screen and (max-width: 800px) {
		justify-content: center;
	}
`
