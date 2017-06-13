import React from 'react';


function History(props){
  const list = props.history.map( (x, index) => <li key={index}>{x.type}</li> );
	return <div>History: <ol>{list}</ol></div>;
}



export default History;
