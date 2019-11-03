import React from 'react';

import './homepage.styles.css';

import Header from '../components/header/header.component';
import Slideshow from '../components/slideshow/slideshow.component';
import Services from '../components/services/services.component';
import Plans from '../components/plans/plans.component';
import Footer from '../components/footer/footer.component';

const HomePage = () => (
	<div className='homepage'>
		<Header/>
	    <Slideshow />
	    <Services />
	    <Plans />
	    <Footer />
	</div>
)

export default HomePage;
	
