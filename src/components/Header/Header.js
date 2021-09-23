import React from 'react';
import './Header.css';
import logo from '../../resources/images/logo.png';

const Header = () => {
	return (
		<section className="header">
			<img src={logo} alt="" />
			<nav>
				<a href="/shop">Shop</a>
				<a href="/order">Order</a>
				<a href="/manage">Manage Inventory</a>
			</nav>
		</section>
	);
};

export default Header;
