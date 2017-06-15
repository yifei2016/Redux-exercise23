import {ADD_ITEM,DELETE_ITME,HISTORY,CHANGE_TAB,ADD_QUANTITY,MINUS_QUANTITY,ADD_PRODUCT,ADD_TO_CATALOG,CACULATE_SUMMA,CHANGE_ITEM} from '../actions'
// function productReducer(state=[],action){
//   return state;
// }
function productReducer(state=[],action){
  switch (action.type) {
    case ADD_PRODUCT:
    debugger
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
    case CHANGE_ITEM:
     let s = state.reduce((newstate,o)=>{
       if(o.item.id == action.item.item.id){
         newstate.push(action.item)
       }else{
         newstate.push(o)
       }
      return newstate;
     },[])

     return s;
    case ADD_ITEM:
      // if(state.length===0){
      //   return [...state,action.item];
      // }
      //let lista = state.cart.slice();
      //lista.push({item: action.item, count: 1});
      //  let news = state.push(action.item)

      let newsta = state.slice();

     let index = newsta.findIndex(o => {
        return o.item.id === action.item.item.id;
      })
      if(index === -1){
        newsta.push(action.item);
      }else{
        newsta[index].count++;
      }
      // state.forEach(o=> {
      //   if(o.item.name === action.item.item.name){
      //        debugger
      //     let newo = Object.assign({},o);
      //     newo.count = newo.count+1;
      //     newst.push(newo);
      //
      //   } else{
      //        debugger
      //     // let newobj = Object.assign({},o);
      //     newst.push(o);
      //   }
      //})
      return newsta;

     // state.items.push(action.item);
     // return state;
     case DELETE_ITME:
     let newState = state.filter(o => o.item.id !== action.item.item.id);


     return newState;
			// function compareProducts(p1,p2){
			// 	return (p1.name === p2.name && p1.affiliation === p2.affiliation && p1.price === p2.price && p1.ordinaryPrice ===p2.ordinaryPrice && p1.img===p2.img)
			// }
      // let newlista = state.filter(x => !compareProducts(x.item, action.item))
			// return [...state, newlista ]
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


      //  case CACULATE_SUMMA:
      //
      //      function compareProducts(p1,p2){
      //        return (p1.item === p2.item && p1.count === p2.count )
      //      }
      //      let findobject = state.find( x => compareProducts(x.item, action.item) )
      //      let itemLi;// = [];
      //      itemLi = state.filter(x => !compareProducts(x.item,action.item));
      //      itemLi.push({item: {...findobject.item, sum:findobject.item.price*findobject.count },
      //         count: findobject.count});
      //
      //      return itemLi;
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
