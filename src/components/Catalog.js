import Product from './Product';
import React,{Component} from 'react';




function Catalog(props){
  const productList = props.products.map((x,index)=> <Product key={index} data={x}/>)
  return(
    <div className="d-flex flex-wrap justify-content-start">
      {productList}
    </div>
  )
}
export default Catalog;
