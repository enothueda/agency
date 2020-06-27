import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { saveMessageIntoDatabase } from '../../firebase/firebase.utils';

import './contact-form.styles.scss';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			company: '',
			email: '',
			phone: '',
			message: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		const messageForm = this.state

		saveMessageIntoDatabase(messageForm);

		this.setState({name: '', company: '', email: '',	phone: '', message: ''})
	}

	handleChange = event => {
		const { value, name } = event.target;		

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='contact-form'>
				<h2>Question or Comments</h2>
				<p className='message-sent'>Your Message has been sent. Thank you</p>
				<form onSubmit={this.handleSubmit} >
					<FormInput 
						name="name"
						type="text" 
						value={this.state.name}
						handleChange={this.handleChange}
						label='Name'
						required
					/>
					<FormInput 
						name="company"
						type="text" 
						value={this.state.company}
						handleChange={this.handleChange}
						label='Company'
					/>
					<FormInput 
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						name="phone"
						type="tel"						
						value={this.state.phone}
						handleChange={this.handleChange}
						label='Phone'
					/>
					<FormInput
						name="message"
						type="text" 
						value={this.state.message}
						handleChange={this.handleChange}
						label='Message'
						maxLength= '100'
					/>

					<CustomButton type='submit'> Send </CustomButton>
				</form>
				
			</div>
		);
	}
} 

export default ContactForm;