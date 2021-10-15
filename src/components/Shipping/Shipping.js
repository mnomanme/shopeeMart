import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { user } = useAuth();

	const onSubmit = (data) => {
		console.log(data);
	};

	console.log(watch('example'));
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
