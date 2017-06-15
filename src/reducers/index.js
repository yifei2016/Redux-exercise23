import {ADD_ITEM,DELETE_ITME,HISTORY,CHANGE_TAB,ADD_QUANTITY,MINUS_QUANTITY,ADD_PRODUCT,ADD_TO_CATALOG,CACULATE_SUMMA} from '../actions'
// function productReducer(state=[],action){
//   return state;
// }
function productReducer(state=[],action){
  switch (action.type) {
    case ADD_PRODUCT:
     return action.product
    default:
      return state;
  }
  }
//   function productReducer(state=[], action) {
//     switch (action.type) {
//       case ADD_PRODUCT:
//     return [
//         ...state.slice(0, action.index),
//         action.item,
//         ...state.slice(action.index)
//     ]
//   }
// }

function tabReducer(state=1,action){

	switch(action.type){
		case CHANGE_TAB:
		 return action.tab;
		default:
		  return state;
	}
}
function catalogReducer(state={},action){
  switch(action.type){
    case ADD_TO_CATALOG:
    return {
      ...state,
      products: [...state.products,action.product]
    }
    default:
    return state;
  }
}
function cartReducer(state=[],action){
	switch(action.type){
		case ADD_ITEM:
    //let lista = state.cart.slice();
    //lista.push({item: action.item, count: 1});
		  return [
        ...state,
        {
          item: action.item,
          count: 1
        }
      ];
			// state.items.push(action.item);
			// return state;
		case DELETE_ITME:
			function compareProducts(p1,p2){
				return (p1.name === p2.name && p1.affiliation === p2.affiliation && p1.price === p2.price && p1.ordinaryPrice ===p2.ordinaryPrice && p1.img===p2.img)
			}
      let newlista = state.filter(x => !compareProducts(x.item, action.item))
			return [...state, newlista ]
			// state = state.items.slice(itemIndex,1);
			// return state;
    case ADD_QUANTITY:
      function compareProducts(p1,p2){
				return (p1.item === p2.item && p1.count === p2.count )
			}
      let obj = state.find( x => compareProducts(x.item, action.item) )

      let newItemList;// = [];
      newItemList = state.filter(x => !compareProducts(x.item,action.item));

      newItemList.push({item: obj.item, count: obj.count+1})
      return newItemList;  // TODO
      // let newObject = {state.items.count: action.item.count,state.items.item: action.item.item}

 // create new items list
        // user filter to remove old item
        // add new item and new count as an object

        // return {...state,items: newObject} // does action contain both count and item?
       case MINUS_QUANTITY:
          function compareProducts(p1,p2){
    				return (p1.item === p2.item && p1.count === p2.count )
    			}
          let findobj = state.find( x => compareProducts(x.item, action.item) )
          let itemList;// = [];
          itemList = state.filter(x => !compareProducts(x.item,action.item));
          itemList.push({item: findobj.item, count: findobj.count-1})
          return itemList;
       case CACULATE_SUMMA:

           function compareProducts(p1,p2){
             return (p1.item === p2.item && p1.count === p2.count )
           }
           let findobject = state.find( x => compareProducts(x.item, action.item) )
           let itemLi;// = [];
           itemLi = state.filter(x => !compareProducts(x.item,action.item));
           itemLi.push({item: {...findobject.item, sum:findobject.item.price*findobject.count },
              count: findobject.count});

           return itemLi;
			 default:
			  return state;
		}
}
function historyReducer(state=[],action){

	switch(action.type){
		case HISTORY:
		 return [...state, action.action]
		default:
		  return state;
	}
}
export {cartReducer,historyReducer,tabReducer,productReducer,catalogReducer};
