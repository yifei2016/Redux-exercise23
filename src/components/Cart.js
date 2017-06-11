import React, { Component } from 'react';
import Modal from 'react-modal';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {ADD_ITEM} from '../actions/actions';
import registerServiceWorker from '../registerServiceWorker';
import Item from './Item';


// let initialState = {
// 	products: []
// }
//
// function reducer(state={},action){
//   switch(action.type){
//     case ADD_ITEM:
//        state.products.push(action.item);
//        return state;
//     default:
//       return state;
//   }
// }
// const store = createStore(reducer, initialState);

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : '1%',
    bottom                : 'auto',
    marginRight           : '10%',
    transform             : 'translate(-50%, -50%)',
    color                 :  '#808080'
  }
};
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#808080';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    // const state = this.props.getState();
    let items = this.props.cart.items.map((x,index)=><Item key={index} data={x}/>)
    return (
      <div>
        <button className="fa fa-shopping-basket fa-2x basket"  onClick={this.openModal}></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle} className="varuKorg">Varukorg</h2>
          {items}
          <div className="d-flex align-items-end flex-column totalsumma">
            <h3>Totalsumma:  </h3>
            <button type="button" className="btn btn-success" onClick={this.closeModal}>Gå till kassan</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Cart;
