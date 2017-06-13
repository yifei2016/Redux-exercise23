import React,{Component} from 'react';
import {actionAddProduct,actionChangeTab,actionHistory} from '../actions';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      affiliationInput:'',
      nameInput:'',
      priceInput:'',
      ordinaryPrice:'',
      imgInput:''
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
    this.setState({nameInput:e.target.value})
  }
  handlepriceInput(e){
    this.setState({priceInput:e.target.value})
  }
  handleordinaryPrice(e){
    this.setState({ordinaryPrice:e.target.value})
  }
  handleimgInput(e){
   this.setState({imgInput:e.target.value})
  }
  handleAddProduct(){
   	 let action = actionAddProduct(this.state);
   	 this.props.dispatch(action);
   	 this.props.dispatch(actionHistory(action));
     this.pros.push(this.state)
  }
  render(){
    return(
      <form className="form-inline my-2 my-lg-0">
        <input value={this.state.affiliationInput} onChange={this.handleaffiliationInput} className="form-control mr-sm-2" type="text" placeholder="affiliation" />
        <input value={this.state.nameInput} onChange={this.handlenameInput} className="form-control mr-sm-2" type="text" placeholder="name" />
        <input value={this.state.priceInput} onChange={this.handlepriceInput} className="form-control mr-sm-2" type="text" placeholder="price" />
        <input value={this.state.ordinaryPrice} onChange={this.handleordinaryPrice} className="form-control mr-sm-2" type="text" placeholder="ordinaryPrice" />
        <input value={this.state.imgInput} onChange={this.handleimgInput} lassName="form-control mr-sm-2" type="text" placeholder="img" />
        <button onClick={this.handleAddProduct} className="btn btn-outline-success my-2 my-sm-0" type="submit">Lägg till</button>
      </form>
    )
  }
}

export default Form;
