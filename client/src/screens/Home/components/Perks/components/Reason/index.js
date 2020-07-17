import React from "react";
import * as SC from "./styles";

import useReveal from "hooks/useReveal"

const Reason = props => {
	const revealProps = useReveal();
	return (
		<SC.ReasonContainer {...revealProps} reverse={props.reverse}>	
			<SC.TextContainer moveRight={props.moveRight}>
				<SC.Title>
					{props.title}
				</SC.Title>
				<SC.Text>
					{props.text}
				</SC.Text>
			</SC.TextContainer>
			<SC.Image>
				<props.image />
			</SC.Image>
		</SC.ReasonContainer>	
	)		
}

export default Reason;
