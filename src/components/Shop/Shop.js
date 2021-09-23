import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);

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

	return (
		<section className="shop-container">
			<div className="product-container">
				<h3>Products: {products.length} </h3>
				{products.map((product) => {
					// console.log(product);
					return <Product product={product} />;
				})}
			</div>
			<div className="cart-container">
				<h3>Order Summary: </h3>
				<h5>Items Ordered: </h5>
			</div>
		</section>
	);
};

export default Shop;
