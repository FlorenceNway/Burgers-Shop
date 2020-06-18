import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import OnTheMenu from "./components/OnTheMenu";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import OrderDetail from "./components/OrderDetail";

function App() {
	const [qtyCounter, setQtyCounter] = useState(0)
	const [orders, setOrders] = useState([])

	return 	<Router>
				<div className="App">
					<Nav qtyCounter={qtyCounter}/>
					<Switch>
						<Route exact path="/" component={OnTheMenu}/>
						<Route exact path="/recipes" component={Recipes} />

						<Route
							path='/recipes/:id'
							render={(props) => (
								<RecipeDetail {...props} setQtyCounter={setQtyCounter} qtyCounter={qtyCounter} 
								/>
							)}
						/>

						<Route path="/cart" >
							<OrderDetail qtyCounter={qtyCounter}/>
						</Route>
					</Switch>
					
				</div>
			</Router>
}

export default App;