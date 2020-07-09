import React from "react";
import NavButtons from "./components/NavButtons";
import * as SC from "./styles";

const Navbar = () => {
	return (
		<SC.Nav>
			<SC.Title>
				<h1>CDNLND</h1>
			</SC.Title>
			<NavButtons />
		</SC.Nav>
	);
};

export default Navbar;
