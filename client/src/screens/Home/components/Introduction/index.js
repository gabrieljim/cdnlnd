import React from "react";
import * as SC from "./styles";

import ParticlesBackground from "./components/ParticlesBackground";
import SaaS from "svg/SaaS";
import Button from "shared/Button";

const Introduction = () => {
	return (
		<SC.Section>
			<ParticlesBackground />
			<SC.Content>
				<SC.Text>
					<SC.Title>Lightning-fast, Cheap, Easy-To-Use</SC.Title>
					<SC.ButtonContainer>
						<Button />
					</SC.ButtonContainer>
				</SC.Text>
				<SC.Image>
					<SaaS />
				</SC.Image>
			</SC.Content>
		</SC.Section>
	);
};

export default Introduction;
