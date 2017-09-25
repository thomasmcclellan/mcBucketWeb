import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: 'searchVIDEO' };
	}
	render(){
		return ( 
			<div className='search-bar'>
				<label className='vidSearchLbl'>
					getINSPIRED:
				</label>
				<input 
					placeholder = { this.state.term }
					onChange = { (event) => this.onInputChange(event.target.value) } />
			</div>
		);
	}
	onInputChange(term){
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;