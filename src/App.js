import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import OnTheMenu from "./components/OnTheMenu";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import OrderDetail from "./components/OrderDetail";
import Footer from './components/Footer';

function App() {
	const [qtyCounter, setQtyCounter] = useState(0)
	const [orders, setOrders] = useState([])
	const [order, setOrder] = useState(null)


	useEffect(() => {
		
		const localCart = [...orders]
		//check if order is already in the cart, get that order index
		const itemIndex = localCart.findIndex((item) => item.id === order.id);
	
		if (itemIndex !== -1) {
			localCart[itemIndex].qty += 1;
			
		} else {
			if(order){
				localCart.push(order);
			}	
		}
	
		order && setQtyCounter(qtyCounter + 1)
		setOrders(localCart)
		
	},[order])

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
								order={order} setOrder={setOrder} orders={orders}/>
							)}
						/>
						<Route path="/cart" >
							<OrderDetail setQtyCounter={setQtyCounter} qtyCounter={qtyCounter} orders={orders} setOrders={setOrders}/>
						</Route>
					</Switch>
					<Footer />
				</div>
			</Router>
}

export default App;