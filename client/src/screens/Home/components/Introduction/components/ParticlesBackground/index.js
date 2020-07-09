import React from "react";
import { withTheme } from "styled-components/macro";
import Particles from "react-particles-js";

const ParticlesBackground = props => {
	return (
		<Particles
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%"
			}}
			params={{
				particles: {
					number: {
						value: 160,
						density: {
							enable: false
						}
					},
					size: {
						value: 3,
						random: true,
						anim: {
							speed: 4,
							size_min: 0.3
						}
					},
					line_linked: {
						enable: false
					},
					move: {
						random: true,
						speed: 0.5,
						direction: "right",
						out_mode: "out"
					},
					color: {
						value: props.theme.background
					}
				},
				interactivity: {
					events: {
						onclick: {
							enable: true,
							mode: "repulse"
						}
					},
					modes: {
						repulse: {
							distance: 200,
							duration: 2
						}
					}
				}
			}}
		/>
	);
};

export default withTheme(ParticlesBackground);
