import React,{Component} from 'react';
import {connect} from 'react-redux';


class History extends Component{
  render(){
    const list = this.props.history.map( (x, index) => <li className='history' key={index}>{x.type}</li> );
    return (
      <div>History: <ol>{list}</ol></div>
    )
  }
}

function mapStateToProps(state) {
	return {
		history: state.history
	}
}


export default connect(mapStateToProps)(History);
