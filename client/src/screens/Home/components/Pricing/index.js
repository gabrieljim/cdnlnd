import React from "react";
import * as SC from "./styles";

import Plan from "./components/Plan";

const Perks = () => {
	return (
		<SC.Section id="pricing">
			<SC.Content>
				<Plan
					title="Trial"
					price="0"
					perks={["20MB Storage", "2GB Data Cap"]}
				/>
				<Plan title="Basic" price="5" perks={["4GB Storage", "5TB Data Cap"]} />
				<Plan
					title="Premium"
					price="10"
					perks={["10GB Storage", "10TB Data Cap"]}
				/>
				<Plan
					title="Ultimate"
					price="18"
					perks={["20GB Storage", "30TB Data Cap"]}
				/>
				<Plan
					custom
				/>
			</SC.Content>
		</SC.Section>
	);
};

export default Perks;
