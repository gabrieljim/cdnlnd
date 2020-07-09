import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Reveal = props => {
	const [ref, inView] = useInView({ threshold: 1 });
	const { variants} = props;

	return (
		<motion.div
			ref={ref}
			css={`
				${props.stylesheet}
			`}
			variants={variants}
			animate={inView ? "visible" : "hidden"}
		>
			{props.children}
		</motion.div>
	);
};

export default Reveal;
