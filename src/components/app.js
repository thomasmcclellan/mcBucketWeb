import React, { Component } from 'react';
import NavBarHeader from './nav.js'
import Video from './video/video.js';
import Signin from './auth/signin.js';

export default class App extends Component {
	render(){
		return (
			<div>
				<NavBarHeader />
				<Video />
				{ this.props.children }
			</div>
		);
	}
}


