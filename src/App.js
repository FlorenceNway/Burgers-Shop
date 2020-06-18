import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import OnTheMenu from "./components/OnTheMenu";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";

function App() {
	
	return 	<Router>
				<div className="App">
					<Nav/>
					<Switch>
						<Route exact path="/" component={OnTheMenu}/>
						<Route exact path="/recipes" component={Recipes} />
						<Route path="/recipes/:id" component={RecipeDetail} />
					</Switch>
					
				</div>
			</Router>
}

export default App;