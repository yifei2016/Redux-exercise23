import React,{Component} from 'react';
import {actionAddItem,actionDeleteItem,actionHistory,actionChangeTab,actionAddQuantity,actionAddProduct,actionAddToCatalog} from '../actions';
import {connect} from 'react-redux';
// import {store} from '../index';
import Product from './Product';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: Math.floor(Date.now() / 1000),
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
    this.setState({affiliation:e.target.value})
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
   debugger
   	 let action = actionAddToCatalog(this.state);
   	 this.props.dispatch(action);
     let homeAction = actionChangeTab(1);
 		  this.props.dispatch(homeAction);
      //or store.dispatch()
      //As for why connect() from React Redux passes dispatch as a prop 
      //instead of store itself—it's because you don't really need store itself in the connected components
  }
  //To change data, we need to dispatch an action,
  //We can either retrieve data by obtaining its current state, 
  //or change its state by dispatching an action

  render(){
    return(
      <div className="form-inline my-2 my-lg-0">
        <input value={this.state.affiliation} onChange={this.handleaffiliationInput} className="form-control mr-sm-2" type="text" placeholder="affiliation" />
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
//connect to map the stores state and dispatch to the props of a component.

//mapStateToProps and mapDispatchToProps are both pure functions that are provided
//the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, 
//whose keys will then be passed on as the props of the component they are connected to.
//export default Form;
