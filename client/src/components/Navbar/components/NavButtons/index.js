import React from "react";
import * as SC from "./styles";
import useViewportDimensions from "hooks/useViewportDimensions";

const NavButtons = props => {
	const windowDimensions = useViewportDimensions();

	const variants = {
		hidden: { opacity: 0, y: "-100%" },
		visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
	};

	/*
	 *
	 * We check for the dimensions of the viewport, if the height is greater than 800px, we check if the element
	 * should animate or not, if the menu button is tapped, isMobileMenuOpen toggles, according to that, the nav
	 * buttons show or don't
	 *
	 * If the width is > 800px, then we simply render the nav buttons
	 *
	 */

	return (
		<SC.List
			isMobileMenuOpen={props.isMobileMenuOpen}
			animate={
				windowDimensions.width < 800
					? props.isMobileMenuOpen
						? "visible"
						: "hidden"
					: ""
			}
			variants={variants}
		>
			<SC.NavButton href="#perks">ABOUT</SC.NavButton>
			<SC.NavButton href="#pricing">TRY IT</SC.NavButton>
			<SC.NavButton>SIGN IN/UP</SC.NavButton>
		</SC.List>
	);
};

export default NavButtons;
