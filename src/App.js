import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';

const App = () => {
	return (
		<Container>
			<Router>
				<Header />
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/review">
						<OrderReview />
					</Route>
					<Route path="/inventory">
						<Inventory />
					</Route>
					<Route path="/placeorder">
						<PlaceOrder />
					</Route>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
