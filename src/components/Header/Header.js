import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../resources/images/logo.png';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
	const { user, logOut } = useFirebase();

	return (
		<section className="header">
			<img src={logo} alt="" />
			<nav>
				<Link to="/shop">Shop</Link>
				<Link to="/review">Order</Link>
				<Link to="/inventory">Manage Inventory</Link>
				{user.email ? (
					<Link to="/" onClick={logOut}>
						Log Out
					</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
			</nav>
		</section>
	);
};

export default Header;
