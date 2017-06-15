import React from 'react';
import Modal from 'react-modal';
// import ReactDOM from 'react-dom';
import Item from './Item';
import {connect} from 'react-redux';
import {actionTotal} from '../actions';

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
    // let action = actionTotal(this.props.count,this.props.catalog.price);
    // this.props.dispatch(action);
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

    let items = this.props.cart.map((x,index) => <Item count={x.count}
       key={x.item.id} data={x.item}/>)
     let total = this.props.cart.reduce((sum,x)=>{return sum + x.count * x.item.price},0);

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
            <h3>Totalsumma: {total}</h3>
            <button type="button" className="btn btn-success" onClick={this.closeModal}>Gå till kassan</button>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('statecart',state.cart)
	return {
		cart: state.cart,
    catalog: state.catalog
	}
}
export default connect(mapStateToProps)(Cart);


// export default Cart;
