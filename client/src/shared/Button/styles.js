import styled from "styled-components/macro";
import { motion } from "framer-motion"
import * as variants from "./variants";

export const ButtonContainer = styled(motion.button).attrs(() => ({
	variants: variants.buttonVariants
}))`
	display: flex;
	align-items: center;
	border: 3px solid ${props => props.theme.text};
	background: linear-gradient(
		to right,
		${props => props.theme.contrast} 50%,
		transparent 50%
	);
	background-size: 200% 100%;
	background-position: right bottom;
	color: ${props => props.theme.text};
	padding: 16px;
	border-radius: 20px;
	font-size: 26px;
	transition: all 0.2s linear;

	&:hover {
		cursor: pointer;
		background-position: left bottom;
		color: ${props => props.theme.dark};
		border: 3px solid ${props => props.theme.contrast};
	}

	@media screen and (max-width: 800px) {
		margin: auto;
	}
`
