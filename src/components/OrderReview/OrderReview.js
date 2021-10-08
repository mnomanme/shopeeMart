import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart] = useCart(products);

	return (
		<div>
			<section className="shopContainer">
				<div className="productContainer">
					<h3>Cart: {cart.length} </h3>
				</div>
				<div className="cart-container">
					<Cart cart={cart} />
				</div>
			</section>
		</div>
	);
};

export default OrderReview;
