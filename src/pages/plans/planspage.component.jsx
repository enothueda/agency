import React from 'react';

import PlansPreview from '../../components/plans-preview/plans-preview.component';

import PLANS_DATA from '../../components/plans/plans.data';

import './planspage.styles.scss';

class PlansPage extends React.Component {
	constructor() {
		super();

		this.state = {
			plans: PLANS_DATA
		}
	}

	render() {
		return(
			<div className='plans-page'>
				<div className='plans-display'>
					{
						this.state.plans.map(({id, ...otherPlansProps}) => 
							<PlansPreview key={id} {...otherPlansProps} />
						)
					}
				</div>				
			</div>

		)
	}
}


export default PlansPage