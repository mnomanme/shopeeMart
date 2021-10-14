import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
	const { user, signInUsingGoogle, logOut } = useFirebase();

	return (
		<section className="d-flex justify-content-center align-items-center">
			<div>
				<h2 className="text-center">Login</h2>

				<form onSubmit="">
					<div className="form-group">
						<label>Email address</label>
						<input type="email" name="" id="" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" name="" id="" className="form-control" placeholder="Password" />
					</div>
					<div className="form-group">
						<input type="submit" value="Submit" className="form-control btn btn-success" />
					</div>
				</form>

				<div>
					<h5 className="text-center">
						<small>
							new to shopee mart website?{' '}
							<Link style={{ textDecoration: 'none', color: 'salmon', fontSize: '15px' }} to="/register">
								Create Account
							</Link>
						</small>
					</h5>
				</div>

				<div className="text-center">
					<h6>---------or---------</h6>
					<button onClick={signInUsingGoogle} className="btn btn-info ">
						Google Sign In
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
