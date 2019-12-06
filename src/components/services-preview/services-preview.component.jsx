import React from 'react';

import './services-preview.styles.scss';

const ServicesPreview = ({title, imageUrl, activities, description}) => (
	<div className='services-details'>
		<div className='row'>
			<div className='column'>
				<div className='image-title'>
					<h2 className='title'>{title}</h2>
					<div className='image' style={{backgroundImage: `url(${imageUrl})` }}/>
				</div>
			</div>
			<div className='column'>
				<div className='activities'>
					<h3>{activities[0].name}</h3>
					<h3>{activities[1].name}</h3>
					<h3>{activities[2].name}</h3>
					<h3>{activities[3].name}</h3>
					<h3>{activities[4].name}</h3>
				</div>
			</div>
			<div className='column'>
				<div className='description'>
					<p>{description}</p>
				</div>
			</div>
		</div>
	</div>
)

export default ServicesPreview;