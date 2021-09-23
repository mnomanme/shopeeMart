import React from 'react';

const Cart = (props) => {
	// console.log(props);
	const { cart } = props;

	let total = 0;
	for (const product of cart) {
		// console.log(product);
		const { price } = product;
		total += price;
	}
	return (
		<section>
			<h3>Order Summary</h3>
			<h5>Items Ordered: {cart.length}</h5>
			<p>Total: {total}</p>
		</section>
	);
};

export default Cart;
