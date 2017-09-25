import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index.js';
import { Link } from 'react-router';

class ListItem extends Component{
	handleFormSubmit(formProps){
		//call action creator to sign up the user
		this.props.createPost(formProps);
	}
	render(){
		const { fields: { title, topic, url, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
				<h3>writePOST!</h3>
				<fieldset className='form-group'>
					<label>title</label>
					<input type='text' className='form-control' { ...title } />
				</fieldset>
				<fieldset className='form-group'>
					<label>category</label>
					<input type='text' className='form-control' { ...topic } />
				</fieldset>
				<fieldset className='form-group'>
					<label>url</label>
					<input type='text' className='form-control' { ...url } />
				</fieldset>
				<fieldset className='form-group'>
					<label>content</label>
					<textarea type='text' rows='8' className='form-control text' { ...content } />
				</fieldset>

				<button type='submit' className='btn btn-primary'>submit</button>
				<Link to='/' className='btn btn-danger'>cancel</Link>
			</form>
		);
	}
}
function mapStateToProps(state){
	return {
		errorMessage: state.auth.error
	};
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'topic', 'url', 'content']
}, mapStateToProps, { createPost })(ListItem);