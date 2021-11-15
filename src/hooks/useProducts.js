import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('https://shopee-mart-server.herokuapp.com/products');
			const data = await res.json();
			setProducts(data.products);
		};
		fetchData();
	}, []);
	// return necessary things
	return [products];
};

export default useProducts;
