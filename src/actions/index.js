const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITME = 'DELETE_ITME';
const HISTORY = 'HISTORY';
const CHANGE_TAB = 'CHANGE_TAB';
const ADD_QUANTITY = 'ADDQUANTITY';
const ADD_PRODUCT = 'Add_PRODUCT';
const ADD_TO_CATALOG = 'ADD_TO_CATALOG';
const MINUS_QUANTITY = 'MINUS_QUANTITY';
const CACULATE_SUMMA = 'CACULATE_SUMMA';

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
function actionTotal(summa){
	return{
		type: CACULATE_SUMMA,
		summa
	}
}
function actionHistory(action){
	return{
		type: HISTORY,
		action: action
	}
}
function actionAddProduct(product){
	return{
		type:ADD_PRODUCT,
		product: product
	}
}
function actionAddQuantity(count){
	return {
		type: ADD_QUANTITY,
		count: count+1
	}
}
function actionMinusQuantity(count){
	return {
		type: MINUS_QUANTITY,
		count: count-1
	}
}
function actionAddToCatalog(product){
	return{
		type: ADD_TO_CATALOG,
		product:product
	}
}
export{ADD_ITEM,actionAddItem,DELETE_ITME,actionDeleteItem,HISTORY,
	actionHistory,CHANGE_TAB,actionChangeTab,ADD_QUANTITY,actionAddQuantity,ADD_PRODUCT,
	actionAddProduct,ADD_TO_CATALOG,actionAddToCatalog,MINUS_QUANTITY,actionMinusQuantity,CACULATE_SUMMA,actionTotal};
