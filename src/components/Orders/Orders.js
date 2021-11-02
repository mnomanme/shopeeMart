import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		fetch(`https://e-shopee-mart.herokuapp.com/orders?email=${user.email}`)
			.then((res) => res.json())
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
