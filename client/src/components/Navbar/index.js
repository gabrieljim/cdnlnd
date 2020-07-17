import React, { useState } from "react";
import NavButtons from "./components/NavButtons";
import NavMenu from "./components/NavMenu";
import * as SC from "./styles";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<SC.Nav>
			<SC.Title>
				<h1>CDNLND</h1>
			</SC.Title>
			<NavButtons isMobileMenuOpen={isMobileMenuOpen}/>
			<NavMenu toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
		</SC.Nav>
	);
};

export default Navbar;
