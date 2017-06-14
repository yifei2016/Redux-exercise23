import React,{Component} from 'react';
import {actionAddItem,actionDeleteItem,actionHistory,actionChangeTab,actionAddQuantity,actionAddProduct,actionAddToCatalog} from '../actions';
import {connect} from 'react-redux';
import {store} from '../index';
import Product from './Product';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      affiliationInput:'',
      name:'',
      price:null,
      ordinaryPrice:'',
      img:''
    }
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleaffiliationInput =  this.handleaffiliationInput.bind(this);
    this.handlenameInput =  this.handlenameInput.bind(this);
    this.handlepriceInput =  this.handlepriceInput.bind(this);
    this.handleordinaryPrice =  this.handleordinaryPrice.bind(this);
    this.handleimgInput =  this.handleimgInput.bind(this);
  }
  handleaffiliationInput(e){
    this.setState({affiliationInput:e.target.value})
  }
  handlenameInput(e){
    this.setState({name:e.target.value})
  }
  handlepriceInput(e){
    this.setState({price:e.target.value})
  }
  handleordinaryPrice(e){
    this.setState({ordinaryPrice:e.target.value})
  }
  handleimgInput(e){
   this.setState({img:e.target.value})
  }
  handleAddProduct(){
   	 let action = actionAddToCatalog(this.state);
   	 this.props.dispatch(action);
     let homeAction = actionChangeTab(1);
 		  this.props.dispatch(homeAction);
  }
  render(){
    return(
      <div className="form-inline my-2 my-lg-0">
        <input value={this.state.affiliationInput} onChange={this.handleaffiliationInput} className="form-control mr-sm-2" type="text" placeholder="affiliation" />
        <input value={this.state.name} onChange={this.handlenameInput} className="form-control mr-sm-2" type="text" placeholder="name" />
        <input  value={this.state.price} onChange={this.handlepriceInput} className="form-control mr-sm-2" type="number" placeholder="price" />
        <input value={this.state.ordinaryPrice} onChange={this.handleordinaryPrice} className="form-control mr-sm-2" type="number" placeholder="ordinaryPrice" />
        <input value={this.state.img} onChange={this.handleimgInput} className="form-control mr-sm-2" type="text" placeholder="img" />
        <p>Product to add:</p>
        <Product data={this.state}/>
        <button onClick={this.handleAddProduct} className="btn btn-outline-success my-2 my-sm-0">Lägg till</button>
      </div>


    )
  }
}
function mapStateToProps(state) {
	return {
		catalog: state.catalog

	}
}
export default connect(mapStateToProps)(Form);

//export default Form;
