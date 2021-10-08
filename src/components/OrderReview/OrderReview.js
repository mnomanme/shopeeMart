import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);

	const handleRemove = (key) => {
		// console.log(key);
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
	};

	return (
		<div>
			<section className="shopContainer">
				<div className="productContainer">
					<h3>Cart: {cart.length} </h3>
					{cart.map((product) => (
						<ReviewItem key={product.key} product={product} handleRemove={handleRemove} />
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart} />
				</div>
			</section>
		</div>
	);
};

export default OrderReview;
