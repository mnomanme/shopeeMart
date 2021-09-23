import React from 'react';
import './Product.css';

const Product = (props) => {
	// console.log(props.product);
	const { category, name, price, stock, star, url, seller, starCount, img } = props.product;
	const handleAddToCart = props.handleAddToCart;
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
				<button onClick={() => handleAddToCart(name)} className="btn-regular">
					add to cart
				</button>
			</div>
		</section>
	);
};

export default Product;
