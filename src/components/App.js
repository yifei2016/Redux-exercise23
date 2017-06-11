import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Catalog from './Catalog';

import Cart from './Cart';




class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<div>
	        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
	          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	            <span className="navbar-toggler-icon"></span>
	          </button>
	          <div className="collapse navbar-collapse" id="navbarSupportedContent">
	            <ul className="navbar-nav mr-auto">
	              <li className="nav-item active">
	                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                <button className='homebutton' >Home</button>
	              </a>
	              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	                <a className="dropdown-item" href="#">Lackan</a>
	                <a className="dropdown-item" href="#">Handdukar</a>
	                <a className="dropdown-item" href="#">Morgonrockar</a>
	              </div>
	            </li>
	            </ul>
	            <form className="form-inline my-2 my-lg-0">
	              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
	              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	            </form>
	          </div>
	          <Cart cart={this.props.cart}/>
	        </nav>
			  </div>
				<Catalog  products={this.props.products}/>
		  </div>
		);
	}

}

function mapStateToProps(state) {
	return {
		products: state.products,
		cart: state.cart
	}
}


export default connect(mapStateToProps)(App);
