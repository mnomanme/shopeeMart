import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('./products.json');
			const data = await res.json();
			setProducts(data);
		};
		fetchData();
	}, []);
	// return necessary things
	return [products];
};

export default useProducts;
