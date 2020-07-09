import styled from "styled-components/macro";
import { motion } from "framer-motion";
import * as variants from "./variants";

export const TestimonyContainer = styled(motion.div).attrs(() => ({
	variants: variants.testimonyContainer
}))`
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 1px #172a3a;
	padding: 15px;
	margin: 20px 0;
	text-align: center;
	border-radius: 5px;
	flex-basis: 32%;
	justify-content: space-between;
	background-color: ${props => props.theme.text};
	height: 50vh;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const Testimony = styled.p`
	font-size: 1em;
	font-style: italic;
	margin-bottom: 25px;
`;

export const Author = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: ${props => props.theme.background};
`;
