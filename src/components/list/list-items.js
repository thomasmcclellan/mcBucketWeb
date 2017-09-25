import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';
import { Link } from 'react-router';
import axios from 'axios';

const ROOT_URL = 'https://mcbucket.herokuapp.com/api/' || 'http://localhost:3000';
const config = {
	headers: { authorization: localStorage.getItem('token') }
}

class ListItems extends Component {
	constructor(props){
		super(props);

		this.state = {
			posts: []
		}
	}
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderItems(){
		return this.props.posts.map((post) => {
			return (
				<li className='list-group-item' key={ post._id }>
					<Link to={ 'items/' + post._id }>
						<span className='pull-xs-left'>{ post.topic }</span>
						<span className='pull-xs-rigth'><strong>{ post.title }</strong></span>
					</Link>
				</li>
			);
		});
	}
	render(){
		console.log(this.state.posts);
		console.log(this.state, 'post test');
		if (this.props.posts == 0){
			return(
				<div><h3>Still loading...</h3></div>			
			);
		} else {
			return (
				<div className='col-md-4'>
					<div className='row'>
						<div className='col-sm-6 text-xs-left'>
							<h3 className='text-xs-left'>Lists</h3>
						</div>
						<div className='col-sm-6 text-xs-right'>
							<Link to='/newitem' className='btn btn-primary'>
								Add to List item
							</Link>
						</div>
					</div>

					<div id='space'></div>
					<ul className='list-group'>
						{ this.renderItems() }
					</ul>
				</div>
			);
		}
	}
}

function mapStateToProps(state){
	return { posts: state.posts.all }
}

export default connect(mapStateToProps, actions)(ListItems);