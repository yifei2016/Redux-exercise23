import Product from './Product';
import React,{Component} from 'react';
import {connect} from 'react-redux';

class Catalog extends Component{

  constructor(props){
    super(props);
  }

  render(){
    
    const productList = this.props.catalog.products.map((x,index)=> <Product key={index} data={x}/>)

    return(
      <div className="d-flex flex-wrap justify-content-start">
        {productList}
      </div>
    )
  }

}
function mapStateToProps(state) {
	return {
		catalog: state.catalog

	}
}
export default connect(mapStateToProps)(Catalog);
