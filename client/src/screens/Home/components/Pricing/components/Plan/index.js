import React from "react";
import * as SC from "./styles";

import useReveal from "hooks/useReveal";

const Plan = props => {
	const revealProps = useReveal({ threshold: 0.5 });
	const { title, price, perks, custom } = props;

	if (custom) {
		return (
			<SC.CardContainer {...revealProps}>
				<div>
					<SC.Title>Custom</SC.Title>
					<SC.PriceContainer pushDown>
						<SC.Title>You decide!</SC.Title>
					</SC.PriceContainer>
				</div>
				<SC.CustomTextContainer>
					<SC.CustomText spaced>
						Need something a little more tailored to fit your website’s needs?
					</SC.CustomText>
					<SC.CustomText>
						Send an email over to our support team so we can help you come up
						with a game plan.
					</SC.CustomText>
				</SC.CustomTextContainer>
				<div>
					<SC.TryIt>Reach out</SC.TryIt>
				</div>
			</SC.CardContainer>
		);
	}

	return (
		<SC.CardContainer {...revealProps}>
			<div>
				<SC.Title>{title}</SC.Title>
				<SC.PriceContainer>
					<SC.Price>${price}</SC.Price>
					<SC.PerMonth>per month</SC.PerMonth>
				</SC.PriceContainer>
			</div>
			<div>
				<SC.Perks>
					{perks.map(perk => (
						<SC.Perk key={perk}>{perk}</SC.Perk>
					))}
				</SC.Perks>
			</div>
			<div>
				<SC.TryIt>Try {title}</SC.TryIt>
			</div>
		</SC.CardContainer>
	);
};

export default Plan;
