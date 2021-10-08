import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../resources/images/logo.png';

const Header = () => {
	return (
		<section className="header">
			<img src={logo} alt="" />
			<nav>
				<Link to="/shop">Shop</Link>
				<Link to="/review">Order</Link>
				<Link to="/inventory">Manage Inventory</Link>
			</nav>
		</section>
	);
};

export default Header;
