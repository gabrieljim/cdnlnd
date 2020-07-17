import React from "react";
import * as SC from "./styles";

const Footer = () => {
	return (
		<SC.Section>
			<SC.Content>
				<SC.Column>
					<SC.Header>
						Lorem
					</SC.Header>
				</SC.Column>
				<SC.Column>
					<SC.Header>
						Lorem
					</SC.Header>
					<SC.Item>
						Ipsum
					</SC.Item>
					<SC.Item>
						Ipsum
					</SC.Item>
					<SC.Item>
						Ipsum
					</SC.Item>
				</SC.Column>
				<SC.Column>
					<SC.Header>
						Lorem
					</SC.Header>
					<SC.Item>
						Ipsum
					</SC.Item>
					<SC.Item>
						Ipsum
					</SC.Item>
					<SC.Item>
						Ipsum
					</SC.Item>
					<SC.Item>
						Ipsum
					</SC.Item>
				</SC.Column>
			</SC.Content>
			<SC.Content>
				<SC.Copyright>
					Copyright &copy; {new Date().getFullYear()} CDNLND
				</SC.Copyright>
			</SC.Content>
		</SC.Section>
	);
};

export default Footer;
