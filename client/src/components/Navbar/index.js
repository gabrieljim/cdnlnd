import React from "react";
import NavButtons from "./components/NavButtons";
import NavMenu from "./components/NavMenu";
import * as SC from "./styles";

const Navbar = () => {
	return (
		<SC.Nav>
			<SC.Title>
				<h1>CDNLND</h1>
			</SC.Title>
			<NavButtons />
			<NavMenu />
		</SC.Nav>
	);
};

export default Navbar;
