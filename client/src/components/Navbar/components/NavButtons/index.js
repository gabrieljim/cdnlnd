import React from "react";
import * as SC from "./styles";

const NavButtons = props => {
	return (
		<SC.List>
			<SC.NavButton>ABOUT</SC.NavButton>
			<SC.NavButton>SPEED</SC.NavButton>
			<SC.NavButton>TRY IT</SC.NavButton>
		</SC.List>
	);
};

export default NavButtons;
