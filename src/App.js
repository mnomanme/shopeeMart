import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import { Orders } from './components/Orders/Orders';

const App = () => {
	return (
		<Container>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route path="/shop">
							<Shop />
						</Route>
						<Route path="/review">
							<OrderReview />
						</Route>
						<PrivateRoute path="/inventory">
							<Inventory />
						</PrivateRoute>
						<PrivateRoute path="/shipping">
							<Shipping />
						</PrivateRoute>
						<PrivateRoute path="/placeorder">
							<PlaceOrder />
						</PrivateRoute>
						<PrivateRoute path="/orders">
							<Orders />
						</PrivateRoute>
						<Route exact path="/">
							<Shop />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</Container>
	);
};

export default App;
