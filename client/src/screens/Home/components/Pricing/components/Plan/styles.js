import styled from "styled-components";
import { motion } from "framer-motion"
import * as variants from "./variants";

export const CardContainer = styled(motion.div).attrs(() => ({
	variants: variants.container
}))`
	height: 100%;
	width: 18%;
	padding: 20px;
	transition: all 0.2s;
	border-radius: 10px;
	background-color: ${props => props.theme.darkerText};
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: 930px) {
		width: 90%;			
		align-items: center;
	}	

	&:hover {
		box-shadow: 0 0 1px ${props => props.theme.dark};
	}
`

export const Title = styled.h3`
	font-size: 30px;
`

export const PriceContainer = styled.div`
	margin-top: ${props => props.pushDown ? "55px" : "30px"};

	@media screen and (max-width: 930px) {
		margin-top: 30px;	
	}
`

export const Price = styled.h4`
	font-size: 60px;
	color: ${props => props.theme.dark};
`

export const PerMonth = styled.p`
	color: ${props => props.theme.dark};
`

export const Perks = styled.ul`
	font-size: 18px;
	list-style-position: inside;
	text-align: left;

	@media screen and (min-width: 1600px) {
		margin-left: 50px;	
	}

	@media screen and (min-width: 1600px) {
		margin-left: 60px;	
	}

	@media screen and (max-width: 1200px) {
		font-size: 16px;
	}

	@media screen and (max-width: 930px) {
		margin: 40px 0;
	}
`

export const Perk = styled.li`
	padding: 10px;
`

export const TryIt = styled.button`
	display: flex;
	align-items: center;
	border: 2px solid ${props => props.theme.dark};
	background: linear-gradient(
		to right,
		${props => props.theme.dark} 50%,
		transparent 50%
	);
	background-size: 200% 100%;
	background-position: right bottom;
	color: ${props => props.theme.dark};
	padding: 10px 17px;
	border-radius: 15px;
	font-size: 20px;
	text-align: center;
	margin: auto;
	transition: all 0.2s linear;

	&:hover {
		cursor: pointer;
		background-position: left bottom;
		color: ${props => props.theme.text};
	}

	@media screen and (max-width: 800px) {
		margin: auto;
	}
`

export const CustomTextContainer = styled.div`
	text-align: left;

	@media screen and (max-width: 930px) {
		text-align: center;
		padding: 40px;
	}
`

export const CustomText = styled.p`
	margin-bottom: ${props => props.spaced ? "20px" : "0"};
`
