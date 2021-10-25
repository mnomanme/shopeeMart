import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { deleteFromDb } from '../../resources/utilities/fakeDb';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
	const [cart, setCart] = useCart();

	const history = useHistory();

	const handleRemove = (key) => {
		// console.log(key);
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	};

	const handleProceedToShipping = () => {
		history.push('/shipping');
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
					<Cart cart={cart}>
						<Button onClick={handleProceedToShipping} variant="outline-warning" size="md-lg">
							Proceed to Shipping
						</Button>
					</Cart>
				</div>
			</section>
		</div>
	);
};

export default OrderReview;
