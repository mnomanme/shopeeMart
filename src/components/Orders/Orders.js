import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

export const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();
	const history = useHistory();

	useEffect(() => {
		fetch(`https://shopee-mart-server.herokuapp.com/orders?email=${user.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('idToken')}`,
			},
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else if (res.status === 401) {
					history.push('/login');
				}
			})
			.then((data) => setOrders(data));
	}, []);

	return (
		<div>
			<h2>This is Orders: {orders.length}</h2>
			{orders.map((order) => (
				<li key={order._id}>
					<strong>
						{order.name} : <small>{order.email}</small>
					</strong>
				</li>
			))}
		</div>
	);
};
