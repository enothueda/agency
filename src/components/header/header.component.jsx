import React from 'react';
import logo from '../../assets/logo.png';

import './header.css';

const Header = ()  => {
	return (
		<div className='header'>
			<img src={logo} alt={"logo"} className='logo'/>
			<div className='menu'>
				<p>Home</p>
				<p>Services</p>
				<p>Packages</p>
				<p>Contact</p>
			</div>
			<div>
				<p>COUNTRY</p>
			</div>
		</div>
	);
}

export default Header;