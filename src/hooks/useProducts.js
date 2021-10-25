import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:4000/products');
			const data = await res.json();
			setProducts(data.products);
		};
		fetchData();
	}, []);
	// return necessary things
	return [products];
};

export default useProducts;
