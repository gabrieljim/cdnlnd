import React from "react";
import Introduction from "./components/Introduction";
import Testimonials from "./components/Testimonials";
import Speeds from "./components/Speeds";
import TryIt from "./components/TryIt";

const Home = () => {
	return (
		<>	
			<Introduction />
			<Testimonials />
			<Speeds />
			<TryIt />
		</>
	)		
}

export default Home;
