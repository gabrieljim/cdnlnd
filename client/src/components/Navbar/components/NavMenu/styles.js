import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const MenuIcon = styled(FiMenu)`
	display: none;
	font-size: 2.5em;

	@media screen and (max-width: 800px) {
		display: block;
	}
`
