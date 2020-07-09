import React from "react";
import * as SC from "./styles";
import useReveal from "hooks/useReveal";

const TryIt = () => {
	const revealProps = useReveal();
	return (
		<SC.Section>
			<SC.Content>
				<SC.Container {...revealProps}>
					<SC.Title>Convinced?</SC.Title>
					<SC.TryItButton>Try it now!</SC.TryItButton>
				</SC.Container>
			</SC.Content>
		</SC.Section>
	);
};

export default TryIt;
