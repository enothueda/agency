import React from 'react';

import './card.styles.scss';

const Card = ({title, imageUrl, description}) => (
	<div className='card'>
		<div className='image' style={{backgroundImage: `url(${imageUrl})` }}/>
		<div className='card-detail'>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</div>
)

export default Card;
