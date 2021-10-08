import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewItem = (props) => {
	const { handleRemove } = props;
	const { name, price, quantity, key } = props.product;
	return (
		<section className="product">
			<section>
				<h4 className="productName">{name}</h4>
				<p>Price: {price}</p>
				<p>Quantity: {quantity}</p>
				<Button onClick={() => handleRemove(key)} variant="outline-warning" size="md-lg">
					remove
				</Button>
			</section>
		</section>
	);
};

export default ReviewItem;
