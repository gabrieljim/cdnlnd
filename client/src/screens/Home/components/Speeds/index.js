import React from "react";
import Reason from "./components/Reason";
import World from "svg/World";
import WalkingDude from "svg/WalkingDude";
import * as SC from "./styles";

const Speeds = () => {
	return (
		<SC.Section>
			<SC.Content>
				<Reason
					title="Global"
					text={
						"With four server locations in beta, CDNLND has you covered around the globe, serving your files to users everywhere. With top quality servers, and excellent bleeding-edge backend software, we can promise a smooth content-delivery service."
					}
					image={World}
				/>
				<Reason
					title="Cheap"
					text={
						"CDNLND is cheap, with prices lower than competitors for just as good services, you can manage your websites content and be assured you aren’t breaking the wallet."
					}
					image={WalkingDude}
					reverse
				/>
				<Reason
					title="Smooth"
					text={
						"With little to no management needed after setup, and an easy to use dashboard, CDNLND will make your experience a breeze."
					}
					image={World}
				/>
			</SC.Content>
		</SC.Section>
	);
};

export default Speeds;
