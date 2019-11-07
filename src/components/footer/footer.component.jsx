import React from 'react';

import ContactInfo from '../contact/contact-info.component';

import './footer.styles.scss';

const Footer = () => (
	<footer className='footer'>
		<div className='info'>
			<h3>Mas información de la compañía</h3>
			<p>
				ehueda es una agencia de servicios digitales, enfocada a impulsar y mejorar las ventas de agronegocios
				acercando a nuevos clientes y consolidar con sus clientes actuales, así como proveer datos relevantes
				y herramientas digitales modernas, de acuerdo a su estrategia comercial.
			</p>
		</div>
		<div className='social-network'>
			<h3>Redes Sociales</h3>
			<div>
				<img src='' />
			</div>
		</div>
		<div className='contact'>
			<h3>Contacto</h3>
			<ContactInfo />
		</div>
	</footer>
)

export default Footer;