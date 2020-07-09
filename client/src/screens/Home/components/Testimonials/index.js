import React from "react";
import * as SC from "./styles";
import * as variants from "./variants";
import Reveal from "components/Reveal";
import Testimony from "./components/Testimony";

import data from "./testimonies.json";

const { testimonies } = data;

const Testimonials = () => {
	return (
		<SC.Section>
			<SC.Content>
				<Reveal variants={variants.title}>
					<SC.TitleContainer>
						<SC.Title>Testimonials</SC.Title>
					</SC.TitleContainer>
				</Reveal>
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
