import React from "react";
import useReveal from "hooks/useReveal";
import * as SC from "./styles";

const Testimony = props => {
	const revealProps = useReveal()
	const { testimony } = props;

	return (
		<SC.TestimonyContainer
			{...revealProps}
		>
			<SC.Testimony>{testimony.testimony}</SC.Testimony>
			<SC.Author>{testimony.name}</SC.Author>
		</SC.TestimonyContainer>
	);
};

export default Testimony;
