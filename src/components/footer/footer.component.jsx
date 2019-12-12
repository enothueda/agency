import React from 'react';

import ContactInfo from '../contact/contact-info.component';

import FacebookIcon from '../../assets/FacebookIcon.png';
//import TwitterIcon from '../../assets/TwitterIcon.png';
import InstagramIcon from '../../assets/InstagramIcon.png';
import LinkedinIcon from '../../assets/LinkedinIcon.png';

import './footer.styles.scss';

const Footer = () => (
	<footer className='footer'>
		<div className='info'>
			<h3>Company's Information</h3>
			<p>
				ehueda is a digital services agency focused on promote and improve agribusiness sales, 
				getting close more customers and consolidate the actual ones, 
				through tools and support with innovative digital technology according to your business strategy.
			</p>
		</div>
		<div className='social-network'>
			<h3>Social Networks</h3>
			<div className='icons'>
				<a href="https://www.facebook.com/ehuedaDigital/" target="_blank" rel="noopener noreferrer"><img alt='facebook-link' className='icon' src={FacebookIcon} /></a>
				<a href="https://www.instagram.com/ehuedaDigital/" target="_blank" rel="noopener noreferrer"><img alt='instagram-link' className='icon' src={InstagramIcon} /></a>
				{/*<a href="https://twitter.com/enothueda?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer"><img alt='twitter-link' className='icon' src={TwitterIcon} /></a>*/}
				<a href="https://www.linkedin.com/company/ehueda" target="_blank" rel="noopener noreferrer"><img alt='linkedin-link' className='icon' src={LinkedinIcon} /></a>
			</div>
		</div>
		<div className='contact'>
			<h3>Contact</h3>
			<ContactInfo />
		</div>
	</footer>
)

export default Footer;