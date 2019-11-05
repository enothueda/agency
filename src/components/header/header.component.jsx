import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ()  => (
	<div className='header'>
		<Link to="/"><img src={logo} alt={"logo"} className='logo' to="/" /></Link>
		<div className='menu'>
			<Link className='option' to="/" >Home</Link>
			<Link className='option' to="/services" >Services</Link>
			<p>Plans</p>
			<p>About</p>
			<p>Contact</p>
		</div>
		<div>
			<p>ESPAÑOL</p>
		</div>
	</div>
);

export default Header;