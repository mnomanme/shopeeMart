import React from 'react';

const Cart = (props) => {
	// console.log(props);
	const { cart } = props;

	const total = cart.reduce((previous, product) => {
		const { price } = product;
		return previous + price;
	}, 0);

	const shipping = 15;
	const tax = (total + shipping) / 10;
	const grandTotal = shipping + tax + total;

	// let total = 0;
	// for (const product of cart) {
	// 	// console.log(product);
	// 	const { price } = product;
	// 	total += price;
	// }
	return (
		<section>
			<h3>Order Summary</h3>
			<h5>Items Ordered: {cart.length}</h5>
			<p>Price: {total.toFixed(2)}</p>
			<p>Shipping: {shipping.toFixed(2)}</p>
			<p>Tax: {tax.toFixed(2)}</p>
			<p>Total: {grandTotal.toFixed(2)}</p>
		</section>
	);
};

export default Cart;
