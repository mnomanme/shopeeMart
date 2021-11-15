import { useState, useEffect } from 'react';
import { getStoredCart } from '../resources/utilities/fakeDb';

const useCart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = getStoredCart();
		const keys = Object.keys(savedCart);

		fetch('https://shopee-mart-server.herokuapp.com/products/bykeys', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(keys),
		})
			.then((res) => res.json())
			.then((products) => {
				if (products.length) {
					const savedCart = getStoredCart();
					const storedCart = [];

					for (const key in savedCart) {
						const addedProducts = products.find((product) => product.key === key);

						if (addedProducts) {
							// set quantity
							const quantity = savedCart[key];
							addedProducts.quantity = quantity;
							storedCart.push(addedProducts);
						}
					}

					setCart(storedCart);
				}
			});
	}, []);
	// return cart
	return [cart, setCart];
};

export default useCart;
