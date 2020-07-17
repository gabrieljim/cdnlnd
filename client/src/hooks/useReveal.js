import { useInView } from "react-intersection-observer";

const useReveal = (options = false) => {
	const [ref, inView] = useInView({ threshold: options.threshold ? options.threshold : 1, triggerOnce: true });

	return {
		ref,
		animate: inView ? "visible" : "hidden"
	};
};

export default useReveal;
