import React from 'react';

import SERVICES_DATA from '../../components/services/services.data';

import ServicesPreview from '../../components/services-preview/services-preview.component';

class ServicesPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			services: SERVICES_DATA
		}		
	}

	render() {
		return (
			<div className='services-page'>
				<h1>Services Detail that can be supported for your business</h1>
				<div className='services-display'>
					{
						this.state.services.map(({id, ...OtherServicesProps}) =>
							<ServicesPreview key={id} {...OtherServicesProps} />
						)
					}

					
				</div>				
			</div>
		)
	}

}

export default ServicesPage;