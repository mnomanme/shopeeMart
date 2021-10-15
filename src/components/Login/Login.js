import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/shop';
	// console.log(location.state?.from);
	// const { user, signInUsingGoogle } = useFirebase();

	const handleGoogleLogIn = () => {
		signInUsingGoogle().then((result) => {
			console.log(result);
			history.push(redirect_url);
		});
	};

	return (
		<section className="d-flex justify-content-center align-items-center">
			<div>
				<h2 className="text-center">Login</h2>

				<form>
					<div className="form-group">
						<label>Email address</label>
						<input type="email" name="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" name="password" className="form-control" placeholder="Password" />
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
					<button onClick={handleGoogleLogIn} className="btn btn-info ">
						Google Sign In
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
