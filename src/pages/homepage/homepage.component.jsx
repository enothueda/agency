import React from 'react';
import { Link } from 'react-router-dom'

import './homepage.styles.css';

import Slideshow from '../../components/slideshow/slideshow.component';
import Services from '../../components/services/services.component';
import Plans from '../../components/plans/plans.component';

const HomePage = () => (
	<div className='homepage'>
		<Slideshow />
		<Link to="/services">
	    	<Services />
	    </Link>
	    <Plans />
	</div>
)

export default HomePage;
	
