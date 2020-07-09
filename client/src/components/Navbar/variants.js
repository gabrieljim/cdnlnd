export const navVariants = {
	hidden: {
		opacity: 0,
	}, 
	visible: {
		opacity: 1,
		transition: {
			ease: "linear",
			staggerChildren: 0.4
		}
	}
}

export const titleVariants = {
	hidden: {
		opacity: 0,
		x: -100
	},
	visible: {
		opacity: 1,
		x: 0
	}
}
