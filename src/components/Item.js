import React, { Component } from 'react';
import {actionDeleteItem,actionAddQuantity,actionMinusQuantity,actionHistory,actionTotal} from '../actions';
import {connect} from 'react-redux';
// import {cartReducer} from '../reducers';
// import {Cart} from './Cart';


class Item extends Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
     this.handleAddCount = this.handleAddCount.bind(this);
     this.handleMinusCount = this.handleMinusCount.bind(this);
  }
  handleDelete(){
    let action = actionDeleteItem(this.props.data);
    this.props.dispatch(action);
    this.props.dispatch( actionHistory(action) );

  }
  handleAddCount(){
    let action = actionAddQuantity(this.props.count,this.props.data);
    
    this.props.dispatch(action);
    // this.props.dispatch(actionTotal(this.props.cartToCatalog.total))
  }
  handleMinusCount(){
    let action = actionMinusQuantity(this.props.count,this.props.data);
    this.props.dispatch(action);
  }
  render(){
    return (

      <div className="d-flex justify-content-between">
        <div> <h5>{this.props.data.affiliation}</h5><p>{this.props.data.name}</p></div>
        <div><img style={{width:'35%',height:'65%'}} src={this.props.data.img} alt=''/></div>
        <div style={{marginRight:'11%'}} className="d-flex flex-column">
          <h6>Pris/st</h6>
          <h6>{this.props.data.price},-</h6>
        </div>
        <div className="d-flex align-items-end flex-column">
         <i onClick={this.handleMinusCount} className="fa fa-minus" aria-hidden="true"></i>
         <h6>Antal:{this.props.count} </h6>
          <i onClick={this.handleAddCount}  className="fa fa-plus" aria-hidden="true" ></i>
        </div>
        <div>
          <i onClick={this.handleDelete}  className="fa fa-times p-2 delete" aria-hidden="true"></i>
        </div>
      </div>
    )
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

export default connect(mapStateToProps)(Item);
// export default Item;
