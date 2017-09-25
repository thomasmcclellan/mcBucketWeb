import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
	handleFormSubmit({ email, password }){
		console.log(email, password);
		//need to do something to log user in
		this.props.signinUser({ email, password });
	}
	renderAlert(){
		if (this.props.errorMessage){
			return (
				<div className='alert alert-danger'>
					<strong>sorryPARTNER.</strong>
					{ this.props.errorMessage }
				</div>
			);
		}
	}

	render(){
		const { handleSubmit, fields: { email, password }} = this.props;
		
		return (
			<form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
				<h3>signIN!</h3>
				<fieldset className='form-group'>
					<label>email:</label>
					<input { ...email } className='form-control' />
				</fieldset>
				<fieldset className='form-group'>
					<label>pasword:</label>
					<input { ...password } type='password' className='form-control' />
				</fieldset>
				{ this.renderAlert() }
				<button action='submit' className='btn btn-primary'>signIN</button>
			</form>
		);
	}

}
function mapStateToProps(state){
		return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);





