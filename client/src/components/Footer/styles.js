import styled from "styled-components";

export const Section = styled.section`
	min-height: 30vh;
	width: 100%;
	background: ${props => props.theme.dark};
	color: ${props => props.theme.text};
	padding: ${props => props.theme.navHeight}px 30px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	position: relative;
	flex-direction: column;
`;

export const Content = styled.div`
	width: 100%;
	text-align: left;
	display: flex;
	justify-content: flex-start;
`

export const Header = styled.div`
	font-size: 18px;
	font-weight: bold;
`

export const Item = styled.p`
	font-size: 16px;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
`

export const Copyright = styled.p`
	margin-top: 20px;
`
