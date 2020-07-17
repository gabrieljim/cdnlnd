import styled from "styled-components/macro";
import { motion } from "framer-motion";
import * as variants from "./variants";

export const List = styled(motion.ul)`
	flex: 1;
	height: 100%;
	display: flex;
	list-style: none;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		position: absolute;
		top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
		background-color: ${props => props.theme.light};
		padding-top: ${props => props.theme.navHeight}px;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 30px;
	}
`;

export const NavButton = styled(motion.a).attrs(() => ({
	whileHover: variants.buttonHover,
	variants: variants.listVariants,
}))`
	font-weight: bold;
	display: flex;
	align-items: center;
	padding: 0 20px;
	text-decoration: none;
	color: ${props => props.theme.text};

	&:hover {
		cursor: pointer;
		color: ${props => props.theme.contrast};
	}

	@media screen and (max-width: 800px) {
		padding: 40px 20px;	
	}
`;
