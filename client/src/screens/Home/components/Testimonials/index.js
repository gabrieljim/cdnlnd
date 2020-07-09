import React from "react";
import * as SC from "./styles";
import useReveal from "hooks/useReveal";
import Testimony from "./components/Testimony";

import data from "./testimonies.json";

const { testimonies } = data;

const Testimonials = () => {
	const revealProps = useReveal();
	return (
		<SC.Section>
			<SC.Content>
				<SC.TitleContainer {...revealProps}>
					<SC.Title>Testimonials</SC.Title>
				</SC.TitleContainer>
				<SC.TestimonialsContainer>
					{testimonies.map((testimony, id) => (
						<Testimony testimony={testimony} key={id} />
					))}
				</SC.TestimonialsContainer>
			</SC.Content>
		</SC.Section>
	);
};

export default Testimonials;
