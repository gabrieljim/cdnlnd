import React from "react";
import * as SC from "./styles";

const Reason = props => {
	return (
		<SC.ReasonContainer reverse={props.reverse}>	
			<SC.TextContainer>
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
