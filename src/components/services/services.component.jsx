import React from 'react';
import Card from '../card/card.component';

import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';

import './services.styles.css';

class Services extends React.Component {
	constructor() {
		super();
		this.state = {
			services: [{
				id: 1,
				title: 'Web & App Development',
				imageUrl: service1,
				description: 'Design and update your web and/or app with the latest trends in technology'
			},
			{
				id: 2,
				title: 'Digital Marketing',
				imageUrl: service2,
				description: 'All tools for be on the clients are looking for your products or services'
			},
			{
				id: 3,
				title: 'Data Management',
				imageUrl: service3,
				description: 'The data you need to measure for improve your business'
			}]
		}
	}
	render() {
		return(
			<div className='services'>
				<h1>Services Provided for your Business</h1>
				<div className='serviceslist'>
					{
						this.state.services.map(({id, title, imageUrl, description}) => (
							<Card key={id} title={title} imageUrl={imageUrl} description={description}/>
						))
					}
				</div>
	        </div>
		)		
	}	
}

export default Services;