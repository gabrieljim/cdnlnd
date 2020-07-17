import React from "react";
import Introduction from "./components/Introduction";
import Testimonials from "./components/Testimonials";
import Perks from "./components/Perks";
import Pricing from "./components/Pricing";

const Home = () => {
	return (
		<>	
			<Introduction />
			<Testimonials />
			<Perks />
			<Pricing />
		</>
	)		
}

export default Home;
