import React from 'react';
import Card from '../card/card.component';

import SERVICES_DATA from './services.data';

import './services.styles.scss';

class Services extends React.Component {
	constructor() {
		super();
		this.state = {
			services: SERVICES_DATA
		}
	}
	render() {
		return(
			<div className='services'>
				<h1>Services Provided for your Business</h1>
				<div className='serviceslist'>
					{
						this.state.services.map(({id, ...otherServicesProps}) => (
							<Card key={id} {...otherServicesProps}/>
						))
					}
				</div>
	        </div>
		)		
	}	
}

export default Services;