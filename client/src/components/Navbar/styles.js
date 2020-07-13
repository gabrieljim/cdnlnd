import styled from "styled-components/macro";
import { motion } from "framer-motion";
import * as variants from "./variants";

export const Nav = styled(motion.nav).attrs(() => ({
	variants: variants.navVariants,
	animate: "visible",
	initial: "hidden"
}))`
	position: absolute;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 100px;
	color: ${props => props.theme.text};
	height: ${props => props.theme.navHeight}px;

	@media screen and (max-width: 800px) {
		padding: 0 40px;
	}
`;

export const Title = styled(motion.div).attrs(() => ({
	variants: variants.titleVariants
}))`
	justify-content: flex-start;
	flex: 1;
`;
