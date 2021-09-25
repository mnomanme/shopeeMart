import React from 'react';
import { Container } from 'react-bootstrap';

const Cart = (props) => {
	// console.log(props);
	const { cart } = props;
	// console.log(cart);

	// reduce to calculate total
	// const total = cart.reduce((previous, product) => {
	// 	const { price } = product;
	// 	return previous + price;
	// }, 0);

	let total = 0;
	let totalItem = 0;
	for (const product of cart) {
		// console.log(product);
		product.quantity = !product.quantity ? 1 : product.quantity;
		// if (!product.quantity) {
		// 	product.quantity = 1;
		// }
		const { price, quantity } = product;
		total += price * +quantity;
		totalItem += quantity;
	}

	const shipping = total > 0 ? 15 : 0;
	const tax = (total + shipping) / 10;
	const grandTotal = shipping + tax + total;

	return (
		<Container>
			<h4>Order Summary</h4>
			<h6>Items Ordered: {totalItem}</h6>
			<p>Price: ${total.toFixed(2)}</p>
			<p>Shipping: ${shipping.toFixed(2)}</p>
			<p>Tax: ${tax.toFixed(2)}</p>
			<h5>Total: ${grandTotal.toFixed(2)}</h5>
		</Container>
	);
};

export default Cart;
