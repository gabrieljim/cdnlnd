import styled from "styled-components/macro";
import { motion } from "framer-motion"
import * as variants from "./variants";

export const Section = styled.section`
	padding-top: ${props => props.theme.navHeight}px;
	padding-bottom: ${props => props.theme.navHeight}px;
	min-height: 100vh;
	width: 100%;
	background: linear-gradient(
		45deg,
		${props => props.theme.dark} 0%,
		${props => props.theme.light} 100%
	);
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	z-index: 0;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
		padding: 0 20px;
	}
`

export const Text = styled(motion.div).attrs(() => ({
	variants: variants.textVariants,
	initial: "hidden",
	animate: "visible"
}))`
	text-align: center;
`

export const Title = styled(motion.h1).attrs(() => ({
	variants: variants.titleVariants
}))`
	font-size: 2.5em;
`

export const ButtonContainer = styled.div`
	margin: 40px auto;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`

export const Image = styled.div`
	height: 45vh;

	@media screen and (max-width: 800px) {
		height: 30vh;
	}
`
