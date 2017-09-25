import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{
	handleFormSubmit(formProps){
		//Call action creator to sign up the user
		this.props.signupUser(formProps);
	}
	renderAlert(){
		if (this.props.errorMessage){
			//Signup error handling
			return (
				<div className='alert alert-danger'>
					<strong>notQUITE</strong>
					{ this.props.errorMessage }
				</div>
			);
		}
	}
	render(){
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

		return (
			<form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
				<h3>signUP!</h3>
				<fieldset className='form-group'>
					<label>email</label>
					<input className='form-control' { ...email } />
					{ email.touched && email.error && <div className='error'>{ email.error }</div> }
				</fieldset>
				<fieldset className='form-group'>
					<label>password</label>
					<input type='password' className='form-control' { ...password } />
					{ password.error }
				</fieldset>
				<fieldset className='form-group'>
					<label>confirmPASSWORD</label>
					<input type='password' className='form-control' { ...passwordConfirm } />
					{ password.touched && passwordConfirm.error && <div className='error'>{ passwordConfirm.error }</div> }
				</fieldset>
				{ this.renderAlert() }
				<button action='submit' className='btn btn-primary'>signUP</button>
			</form>
		);
	}
}

function validate(formProps){
	const errors = {};

	if (!formProps.email){
		errors.email = 'enterEMAIL';
	}
	if (!formProps.password){
		errors.password = 'enterPASSWORD';
	}
	if (!formProps.passwordConfirm){
		errors.passwordConfirm = 'confirmPASSWORD';
	}
	if (formProps.password !== formProps.passwordConfirm){
		errors.password = 'unmatchedPASSWORDS';
	}
	console.log(formProps)
	return errors;
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate: validate
}, mapStateToProps, actions)(Signup);




















