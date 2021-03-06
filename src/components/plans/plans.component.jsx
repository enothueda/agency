import React from 'react';
import Card from '../card/card.component';

import PLANS_DATA from './plans.data'

import './plans.styles.scss';

class Plans extends React.Component {
	constructor() {
		super();
		this.state = {
			plans: PLANS_DATA
		}
	}
	render() {
		return(
			<div className='plans'>
				<h1>Plans that keeps your business updated</h1>
				<div className='planslist'>
		        	{
						this.state.plans.map(({id, ...otherPlansProps}) => (
							<Card key={id} {...otherPlansProps} />
						))
					}
	      		</div>
	      	</div>
		)
	}
}

export default Plans;