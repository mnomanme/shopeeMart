import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../resources/utilities/fakeDb';

const Shipping = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const { user } = useAuth();

	const onSubmit = (data) => {
		const savedCart = getStoredCart();
		data.order = savedCart;
		// console.log(data);

		fetch('https://shopee-mart-server.herokuapp.com/orders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				if (data.insertedId) {
					alert('your order placed successfully');
					clearTheCart();
					reset();
				}
			});
	};

	return (
		<>
			<section className="w-50">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<label>Your Name:</label>
						<input className="form-control" placeholder="your name" defaultValue={user.displayName} {...register('name')} />
					</div>
					<div className="form-group">
						<label>Your Email:</label>
						<input className="form-control" placeholder="your email" defaultValue={user.email} {...register('email', { required: true })} />
						{errors.email && <span className="text-danger">This field is required</span>}
					</div>
					<div className="form-group">
						<label>Your Address:</label>
						<input className="form-control" placeholder="address" {...register('address')} />
					</div>
					<div className="form-group">
						<label>Your City:</label>
						<input className="form-control" placeholder="city" {...register('city')} />
					</div>
					<div className="form-group">
						<label>Your Phone Number:</label>
						<input className="form-control" placeholder="phone" {...register('phone')} />
					</div>
					<div className="form-group">
						<input type="submit" value="Submit" className="form-control btn btn-success" />
					</div>
				</form>
			</section>
		</>
	);
};

export default Shipping;
