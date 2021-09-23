import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const url = `./products.json`;
		try {
			const fetchData = async () => {
				const res = await fetch(url);
				const data = await res.json();
				// console.log(data);
				setProducts(data);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	// handleAddToCart

	const handleAddToCart = (product) => {
		// console.log('add', product);
		const newCart = [...cart, product];
		setCart(newCart);
	};

	return (
		<section className="shop-container">
			<div className="product-container">
				<h3>Products: {products.length} </h3>
				{products.map((product) => {
					// console.log(product);
					const { key } = product;
					return <Product key={key} product={product} handleAddToCart={handleAddToCart} />;
				})}
			</div>
			<div className="cart-container">
				<Cart cart={cart} />
			</div>
		</section>
	);
};

export default Shop;
