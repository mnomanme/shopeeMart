import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<section className="d-flex justify-content-center align-items-center">
			<div>
				<h2 className="text-center">Register: Create Account</h2>

				<form onSubmit="">
					<div class="form-group">
						<label>Email address</label>
						<input type="email" name="" id="" class="form-control" placeholder="Enter email" />
					</div>
					<div class="form-group">
						<label>Password</label>
						<input type="password" name="" id="" class="form-control" placeholder="Password" />
					</div>
					<div class="form-group">
						<label>Re-enter Password</label>
						<input type="password" name="" id="" class="form-control" placeholder="Re-enter Password" />
					</div>
					<div class="form-group">
						<input type="submit" value="Submit" class="form-control btn btn-success" />
					</div>
				</form>
				<div>
					<h5 className="text-center">
						<small>
							Already Have an Account?{' '}
							<Link style={{ textDecoration: 'none', color: 'salmon', fontSize: '15px' }} to="/login">
								Login
							</Link>
						</small>
					</h5>
				</div>
				<div className="text-center">
					<h6>---------or---------</h6>
					<button className="btn btn-info ">Google Sign In</button>
				</div>
			</div>
		</section>
	);
};

export default Register;
