import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
	// console.log(props.product);
	const { product } = props;
	const { name, price, stock, seller, img } = props.product;
	const { handleAddToCart } = props;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	return (
		<section className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div className="productName">
				<h5>{name}</h5>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>Price: {price}</p>
				<p>
					<small>only {stock} left in stock - order soon</small>
				</p>
				<p>
					<small>only {stock} left in stock - order soon</small>
				</p>
				<button onClick={() => handleAddToCart(product)} className="btn-regular">
					{cartIcon} add to cart
				</button>
			</div>
		</section>
	);
};

export default Product;
