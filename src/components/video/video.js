import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar.js';
import VideoDetail from './video-detail.js';

const API_KEY = 'AIzaSyC8_D50h0qjjL5ckDeCOK5EuD1VCciiLTU';

class Video extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('take on me');
	}
	videoSearch(term){
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos, 
				selectedVideo: videos[0]
			});
		});
	}
	render(){
		const videoSearch = _.debounce((term) => { this. videoSearch(term) }, 1800);
		return (
			<div>
				<SearchBar onSearchTermChange = { videoSearch } />
				<VideoDetail video = { this.state.selectedVideo } />
			</div>
		);
	}
}
export default Video;