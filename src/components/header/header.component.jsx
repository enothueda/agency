import React from 'react';
import logo from '../../assets/logo.png';

import './header.styles.css';

const Header = ()  => {
	return (
		<div className='header'>
			<img src={logo} alt={"logo"} className='logo'/>
			<div className='menu'>
				<p>Home</p>
				<p>Services</p>
				<p>Plans</p>
				<p>About</p>
				<p>Contact</p>
			</div>
			<div>
				<p>ENGLISH</p>
				<p>/</p>
				<p>ESPAÑOL</p>
			</div>
		</div>
	);
}

export default Header;