export const textVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.7
		}
	}
};

export const titleVariants = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeInOut"
		}
	}
};
