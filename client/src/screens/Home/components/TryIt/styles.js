import styled from "styled-components";
import { motion } from "framer-motion"
import * as variants from "./variants";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 100vh;
	width: 100%;
	background: ${props => props.theme.darkerText};
	color: ${props => props.theme.dark};
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	padding: 0 10%;

	@media screen and (max-width: 800px) {
		justify-content: center;
	}
`

export const Container = styled(motion.div).attrs(() => ({
	variants: variants.container
}))`

	width: 60%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 800px) {
		width: 90%;
	}
`

export const Title = styled.div`
	font-size: 2.5em;
	margin-bottom: 50px;
`

export const TryItButton = styled.button`
	display: flex;
	align-items: center;
	border: 3px solid ${props => props.theme.dark};
	background: linear-gradient(
		to right,
		${props => props.theme.dark} 50%,
		transparent 50%
	);
	background-size: 200% 100%;
	background-position: right bottom;
	color: ${props => props.theme.dark};
	padding: 16px;
	border-radius: 20px;
	font-size: 26px;
	text-align: center;
	transition: all 0.2s linear;

	&:hover {
		cursor: pointer;
		background-position: left bottom;
		color: ${props => props.theme.text};
		border: 3px solid ${props => props.theme.text};
	}

	@media screen and (max-width: 800px) {
		margin: auto;
	}
`
