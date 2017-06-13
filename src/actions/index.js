const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITME = 'DELETE_ITME';
const HISTORY = 'HISTORY';
const CHANGE_TAB = 'CHANGE_TAB';
const ADDQUANTITY = 'ADDQUANTITY';
const ADD_PRODUCT = 'Add_PRODUCT';
const ADDPRODUCTTOCATALOG = 'ADDPRODUCTTOCATALOG';

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
function actionAddProduct(product){
	return{
		type:ADD_PRODUCT,
		product: product
	}
}
function actionAddQuantity(count){
	return {
		type: ADDQUANTITY,
		count: count
	}
}
function actionCatalog(product){
	return{
		type: ADDPRODUCTTOCATALOG,
		product:product
	}
}
export{ADD_ITEM,actionAddItem,DELETE_ITME,actionDeleteItem,HISTORY,
	actionHistory,CHANGE_TAB,actionChangeTab,ADDQUANTITY,ADD_PRODUCT,
	actionAddProduct,actionAddQuantity,ADDPRODUCTTOCATALOG,actionCatalog};
