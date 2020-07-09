import styled from "styled-components";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 100vh;
	width: 100%;
	background: ${props => props.theme.text};
	color: ${props => props.theme.dark};
	display: flex;
	align-items: center;
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
 export const TitleContainer = styled.div`
	text-align: left;
	margin-bottom: 40px;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`

export const Title = styled.h1`
	font-size: 2.5em;
`

export const TestimonialsContainer = styled.div`
	display: flex;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`
