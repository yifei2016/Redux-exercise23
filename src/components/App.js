import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Catalog from './Catalog';
import Cart from './Cart';
import History from './History';
import Form from './Form';
import {actionChangeTab,actionHistory} from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClickHistory = this.handleClickHistory.bind(this);
		this.handleClickHome = this.handleClickHome.bind(this);
		this.handleClickForm = this.handleClickForm.bind(this);
		this.changeTab = this.changeTab.bind(this);
		// this.handleAddProduct = this.handleAddProduct.bind(this);
	}
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
 handleClickForm(){
	 this.changeTab(4);
 }
	handleClickHistory(){
		this.changeTab(3);
	}
	handleClickHome(){
		this.changeTab(1);
	}
	render() {
		let view;
		if(this.props.tab===3){
	   console.log(this.props.tab);
			view = <History history={this.props.history}/>
		}else if(this.props.tab===1){
			view=<Catalog  />;
		}
		else if(this.props.tab===4){
			view=<Form  pros={this.props.products}/>
		}
		return (
			<div className="App">
	        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
	          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	            <span className="navbar-toggler-icon"></span>
	          </button>
	          <div className="collapse navbar-collapse" id="navbarSupportedContent">
	            <ul className="navbar-nav mr-auto">
	              <li className="nav-item active">
	                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                <button  onClick={this.handleClickHome}  className='homebutton' >Hem</button>
	              </a>
	              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	                <a className="dropdown-item" >Lackan</a>
	                <a className="dropdown-item" >Handdukar</a>
	                <a className="dropdown-item" >Morgonrockar</a>
	              </div>
	            </li>
							<button type="button" onClick={this.handleClickHistory} className="btn btn-success btn-sm">Historik</button>
							<button type="button" onClick={this.handleClickForm} className="btn btn-info btn-sm">Form</button>
	            </ul>
	          </div>
	          <Cart cartToCatalog={this.props.cart} cart={this.props.cart}/>
	        </nav>
			   <div>
					 {view}
				 </div>

		  </div>
		);
	}

}

function mapStateToProps(state) {
	return {
		tab:state.tab,
		catalog: state.catalog,
		cart: state.cart,
		history: state.history
	}
}


export default connect(mapStateToProps)(App);
