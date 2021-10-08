import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteFromDb } from '../../resources/utilities/fakeDb';
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
		deleteFromDb(key);
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
						<Link to="/review">
							<Button variant="outline-warning" size="md-lg">
								Place your Order
							</Button>
						</Link>
					</Cart>
				</div>
			</section>
		</div>
	);
};

export default OrderReview;
