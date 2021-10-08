import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart] = useCart(products);

	return (
		<div>
			<h2>Order Review {products.length}</h2>
			<h5>Cart {cart.length}</h5>
		</div>
	);
};

export default OrderReview;
