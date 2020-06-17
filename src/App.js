import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import OnTheMenu from "./components/OnTheMenu";
import Recipes from "./components/Recipes";

function App() {
	
	return 	<Router>
				<div className="App">
					<Nav/>
					<Route path="/" exact component={OnTheMenu} />
					<Route path="/recipes" exact component={Recipes} />
				</div>
			</Router>
}

export default App;