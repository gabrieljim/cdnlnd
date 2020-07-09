import React from "react";
import Reveal from "components/Reveal";
import * as SC from "./styles";

const variants = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: {
		opacity: 1,
		y: 0
	}
};

const Testimony = props => {
	const { testimony } = props;
	return (
		<Reveal variants={variants} stylesheet={SC.TestimonyContainer}>
			<h1>{testimony.name}</h1>
			<p>{testimony.testimony}</p>
		</Reveal>
	);
};

export default Testimony;
