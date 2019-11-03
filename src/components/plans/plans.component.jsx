import React from 'react';
import Card from '../card/card.component';

import plan1 from '../../assets/plan1.jpg';
import plan2 from '../../assets/plan2.jpg';
import plan3 from '../../assets/plan3.jpg';

import './plans.styles.css';

class Plans extends React.Component {
	constructor() {
		super();
		this.state = {
			plans: [{
				id: 1,
				title: 'Starter',
				imageUrl: plan1
			},
			{
				id: 2,
				title: 'Professional',
				imageUrl: plan2
			},
			{
				id: 3,
				title: 'Enterprise',
				imageUrl: plan3
			}]
		}
	}
	render() {
		return(
			<div>
				<h1>Which Plan fits according to your business</h1>
				<div className='planslist'>
		        	{
						this.state.plans.map(({id, title, imageUrl}) => (
							<Card key={id} title={title} imageUrl={imageUrl}/>
						))
					}
	      		</div>
	      	</div>
		)
	}
}

export default Plans;