import styled from "styled-components";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 30vh;
	width: 100%;
	background: ${props => props.theme.dark};
	color: ${props => props.theme.text};
	display: flex;
	align-items: center;
	position: relative;

	&:before {
    content: "";
		background: ${props => props.theme.dark};
    height: 69px;
    top: -35px;
    transform: skewY(-2deg);
    position: absolute;
    left: 0;
    right: 0;
	}
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
