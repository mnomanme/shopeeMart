import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../resources/utilities/fakeDb';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useCart();
	const [displayProducts, setDisplayProducts] = useState([]);
	const [page, setPage] = useState(0);
	const [pageCount, setPageCount] = useState(0);

	// data load from database
	const size = 10;
	useEffect(() => {
		const url = `http://localhost:4000/products?page=${page}&&size=${size}`;
		try {
			const fetchData = async () => {
				const res = await fetch(url);
				const data = await res.json();
				// console.log(data.products);
				setProducts(data.products);
				setDisplayProducts(data.products);

				const count = data.count;
				const pageNumber = Math.ceil(count / size);

				setPageCount(pageNumber);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [page]);

	// saved cart price data laod
	useEffect(() => {
		const savedCart = getStoredCart();
		const storedCart = [];
		if (products.length) {
			for (const key in savedCart) {
				// console.log(key);
				// console.log(products);
				// console.log(key, savedCart[key]);
				const addedProducts = products.find((pd) => pd.key === key);
				if (addedProducts) {
					const quantity = savedCart[key];
					addedProducts.quantity = quantity;
					storedCart.push(addedProducts);
				}
			}
			setCart(storedCart);
		}
	}, []);

	// handleAddToCart
	const handleAddToCart = (product) => {
		// console.log('add', product);
		const exists = cart.find((pd) => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((pd) => pd.key !== product.key);
			exists.quantity += 1;
			newCart = [...rest, product];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}
		setCart(newCart);
		// set data localstorage
		addToDb(product.key);
	};

	// handleSearch
	const handleSearch = (event) => {
		console.log(event.target.value);
		const searchText = event.target.value;
		const matchedProducts = products.filter((pd) => pd.name.toLowerCase().includes(searchText.toLowerCase()));
		console.log(matchedProducts.length);
		setDisplayProducts(matchedProducts);
	};

	return (
		<>
			<section>
				<div className="searchContainer">
					<input onChange={handleSearch} type="text" name="" id="" placeholder="search product" />
				</div>
			</section>
			<section className="shopContainer">
				<div className="productContainer">
					<h3>Products: {products.length} </h3>
					{displayProducts.map((product) => {
						// console.log(product);
						const { key } = product;
						return <Product key={key} product={product} handleAddToCart={handleAddToCart} />;
					})}
					<section className="pagination">
						{[...Array(pageCount).keys()].map((index) => (
							<Button onClick={() => setPage(index)} key={index} variant="success" size="sm" className={index === page ? 'selected' : ''}>
								{index + 1}
							</Button>
						))}
					</section>
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review">
							<Button variant="outline-warning" size="md-lg">
								Review your Order
							</Button>
						</Link>
					</Cart>
				</div>
			</section>
		</>
	);
};

export default Shop;
