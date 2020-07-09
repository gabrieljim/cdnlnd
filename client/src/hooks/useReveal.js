import { useInView } from "react-intersection-observer";

const useReveal = options => {
	const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

	return {
		ref,
		animate: inView ? "visible" : "hidden"
	};
};

export default useReveal;
