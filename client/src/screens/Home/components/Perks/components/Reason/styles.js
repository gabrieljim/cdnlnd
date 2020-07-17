import styled from "styled-components";
import { motion } from "framer-motion";
import * as variants from "./variants";

export const ReasonContainer = styled(motion.div).attrs(() => ({
	variants: variants.container
}))`
	width: 100%;
	padding: 40px 0;
	display: flex;
	justify-content: space-evenly;
	flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
	align-items: center;

	@media screen and (max-width: 800px) {
		padding: 0;
		flex-direction: column;
	}
`;

export const Image = styled.div`
	display: flex;
	max-width: ${props => (props.reverse ? "60%" : "30%")};
	align-items: center;
	justify-content: center;
	height: 30vh;

	@media screen and (max-width: 800px) {
		height: 20vh;
		max-width: 100%;
		margin: 30px 0;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	max-width: ${props => (props.reverse ? "30%" : "60%")};
	text-align: left;
	justify-content: center;
	flex-direction: column;
	height: 30vh;
	padding: ${props => (props.moveRight ? "20px" : "0")};

	@media screen and (max-width: 800px) {
		max-width: 100%;
		padding: 0;
	}
`;

export const Title = styled.h3`
	font-size: 30px;
	padding-bottom: 15px;
	font-weight: bold;
`;

export const Text = styled.p`
	font-size: 18px;

	@media screen and (max-width: 800px) {
		font-size: 16px;
		
	}
`;
