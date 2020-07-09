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
		display: none
	}
`;

export const NavButton = styled(motion.li).attrs(() => ({
	whileHover: variants.buttonHover,
	variants: variants.listVariants,
}))`
	font-weight: bold;
	display: flex;
	align-items: center;
	padding: 0 20px;

	&:hover {
		cursor: pointer;
		color: ${props => props.theme.contrast};
	}
`;
