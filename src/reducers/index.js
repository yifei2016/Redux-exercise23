import {ADD_ITEM,DELETE_ITME,HISTORY,CHANGE_TAB,ADDQUANTITY} from '../actions';

function productReducer(state=[],action){
  return state;
}
function tabReducer(state=1,action){
	switch(action.type){
		case CHANGE_TAB:
		 return action.tab;
		default:
		  return state;
	}
}
function cartReducer(state={},action){
	if(state.items===undefined){
		state.items=[];
	}
	switch(action.type){
		case ADD_ITEM:
		  return {...state, items: [...state.items, action.item]};
			// state.items.push(action.item);
			// return state;
		case DELETE_ITME:
			function compareProducts(p1,p2){
				return (p1.name === p2.name && p1.affiliation === p2.affiliation && p1.price === p2.price && p1.ordinaryPrice ===p2.ordinaryPrice && p1.img===p2.img)
			}
			return {...state, items: state.items.filter(x=> !compareProducts(x, action.item))}
			
			// state = state.items.slice(itemIndex,1);
			// return state;
			default:
			return state;
     case ADDQUANTITY:
       return {...state,items: [...state.items,action.count++]}
		}
}
function historyReducer(state=[],action){
	switch(action.type){
		case HISTORY:
		 return [...state,action.action];
		default:
		  return state;
	}
}
export {cartReducer,historyReducer,tabReducer,productReducer};
