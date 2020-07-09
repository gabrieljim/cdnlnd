import React from "react";
import { Route, Switch } from "react-router-dom";
import * as SC from "./styles";

import Home from "screens/Home";

const MainRouter = () => {
	return (
		<SC.Content>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</SC.Content>
	);
};

export default MainRouter;
