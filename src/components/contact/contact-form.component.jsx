import React from 'react';

import './contact-form.styles.scss';

const ContactForm = () => (
	<div className='contact-form'>
		<h2>Te haremos llegar mas detalles</h2>
		<form>
			<input type="text" name="name" />
			<input type="email" name="email" />
			<input type="phone" name="phone" />
		</form>
		<p>Tus datos</p>
	</div>
);

export default ContactForm;