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
			<Link className='option' to="/plans" >Plans</Link>
			<Link className='option' to="/contact" >Contact</Link>
		</div>		
	</div>
);

export default Header;