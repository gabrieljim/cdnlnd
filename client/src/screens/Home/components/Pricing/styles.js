import styled from "styled-components";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 100vh;
	width: 100%;
	background: ${props => props.theme.darkerText};
	color: ${props => props.theme.dark};
	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (max-width: 930px) {
		flex-direction: column;
		align-items: center;
	}
`
