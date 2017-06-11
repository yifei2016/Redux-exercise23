import React,{Component} from 'react';
import {ADD_ITEM,actionAddItem} from '../actions/actions.js';
import {Cart,store} from './Cart';
import {connect} from 'react-redux';

class Product extends Component{
	constructor(props){
		super(props);
		this.handleAddProductButton = this.handleAddProductButton.bind(this);
	}
 handleAddProductButton(e){
	 let action = actionAddItem(this.props.data);
	 this.props.dispatch(action);

 }
	render(){
		return (
				<div className="card" >
					<img className="card-img-top" src={this.props.data.img} alt="Card image cap"  height="242" width="242"/>
					<div className="card-block">
						<h4 className="card-text currentPrice">{this.props.data.price}<span className="linethrough">{this.props.data.ordinaryPrice}</span></h4>
						<h5 className="card-text">{this.props.data.affiliation}</h5>
						<p className="card-text">{this.props.data.name}</p>
						<button data={this.props.data} onClick={this.handleAddProductButton} type="button" className="btn btn-success">Lägg till varukorg</button>
					</div>
				</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(Product);

// export default Product;
