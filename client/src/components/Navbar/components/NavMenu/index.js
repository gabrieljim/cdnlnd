import React from "react";
import * as SC from "./styles";

const NavMenu = props => {
	return (
		<SC.MenuIcon onClick={props.toggleMenu}/>	
	)		
}

export default NavMenu;
