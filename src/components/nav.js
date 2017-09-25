import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { 
	Navbar, 
	Nav, 
	NavItem, 
	NavDropdown, 
	DropdownButton, 
	MenuItem, 
	CallapsibleNav 
} from 'react-bootstrap';

class NavBarHeader extends Component {
	renderLinks(){
		if (this.props.authenticated){
			return <NavItem href='/'>signOUT</NavItem>
		} else {
			return [
				<NavItem key={ 1 } href='/signin'>signIN</NavItem>,
				<NavItem key={ 2 } href='/signup'>signUP</NavItem>
			];
		}
	}

	render(){
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href='#'>bucketLIST</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{ this.renderLinks() }

					<NavDropdown key={ 3 } title='coolSTUFF' id='basic-nav-dropdown'>
						<MenuItem key={ 3.1 }>action</MenuItem>
						<MenuItem key={ 3.2 }>anotherACTION</MenuItem>
						<MenuItem key={ 3.3 }>somethingELSE</MenuItem>
						<MenuItem divider />
						<MenuItem key={ 3.4 }>separateLINK</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

function mapStateToProps(state){
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(NavBarHeader);