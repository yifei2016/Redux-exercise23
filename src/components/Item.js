import React, { Component } from 'react';

function Item(props){
  return (
    <div className="d-flex justify-content-between">
      <div> <h4>{props.data.affiliation}{props.data.name}</h4></div>
      <div className="d-flex flex-column">
        <h6>Pris/st</h6>
        <h6>59,-</h6>
      </div>
      <div className="d-flex align-items-end flex-column">
        <h6>Antal </h6>
        <h6><i className="fa fa-minus" aria-hidden="true"></i> 1 <i className="fa fa-plus" aria-hidden="true"></i></h6>
      </div>
      <div>
        <i className="fa fa-times p-2" aria-hidden="true"></i>
      </div>
    </div>
  )
}
export default Item;
