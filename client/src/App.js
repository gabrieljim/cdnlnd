import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "constants/theme";
import GlobalStyle from "constants/globalStyle";

import Navbar from "components/Navbar";
import MainRouter from "components/MainRouter";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navbar />
				<Router>
					<MainRouter />
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
