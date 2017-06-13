const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITME = 'DELETE_ITME';
const HISTORY = 'HISTORY';
const CHANGE_TAB = 'CHANGE_TAB';
const ADDQUANTITY = 'ADDQUANTITY';

function actionChangeTab(selectedTab){
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}
function actionAddItem(p){
	return{
		type: ADD_ITEM,
    item: p
	}
}

function actionDeleteItem(p){
	return{
		type: DELETE_ITME,
		item: p
	}
}
function actionHistory(action){
	return{
		type: HISTORY,
		action: action
	}
}
function actionAddQuantity(count){
	return {
		type: ADDQUANTITY,
		count: count
	}
}
export{ADD_ITEM,actionAddItem,DELETE_ITME,actionDeleteItem,HISTORY,actionHistory,CHANGE_TAB,actionChangeTab,ADDQUANTITY,actionAddQuantity};
