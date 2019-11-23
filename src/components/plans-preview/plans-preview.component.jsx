import React from 'react';

import './plans-preview.styles.scss';

const PlansPreview = ({title, imageUrl, description, service1, service2, service3, activities1, activities2, activities3}) => {
	console.log(title);
	return (
		<div className='plans-preview'>
			<div className='row'>
				<div className='column'>
					<h1>{title}</h1>
					<div className='plans-preview-image' style={{backgroundImage: `url(${imageUrl})` }}/>
					<h2 className='plan-description'>{description}</h2>
					<div className='plan'>
						<div className='details'>
							<h3>{service1}</h3>
							<div className='description-details'>
								{
									activities1.map(activity => (
										<div key={activity.id} >{activity.activity}</div>
									))
								}
							</div>
						</div>
						<div className='details'>
							<h3>{service2}</h3>
							<div className='description-details'>
								{
									activities2.map(activity => (
										<div key={activity.id} >{activity.activity}</div>
									))
								}
							</div>
						</div>
						<div className='details'>
							<h3>{service3}</h3>
							<div className='description-details'>
								{
									activities3.map(activity => (
										<div key={activity.id} >{activity.activity}</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>			
		</div>
	)
}

export default PlansPreview;