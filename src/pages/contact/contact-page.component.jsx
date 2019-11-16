import React from 'react';

import ContactInfo from '../../components/contact/contact-info.component';
import ContactForm from '../../components/contact/contact-form.component';

import './contact-page.scss';

const ContactPage = () => (
	<div className='contact-page'>
		<ContactInfo />
		<ContactForm /> 
	</div>
);

export default ContactPage;