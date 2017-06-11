
import {ADD_ITEM} from '../actions/actions';
function cartReducer(state={},action){
	
	if(state.items===undefined){
		state.items=[];
	}
	switch(action.type){
		case ADD_ITEM:
			state.items.push(action.item);
			return state;
		default:
			return state;
	}
}

export {cartReducer};
