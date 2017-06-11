const ADD_ITEM = 'ADD_ITEM';

function actionAddItem(p){
	return{
		type: ADD_ITEM,
    item: p
	}
}



export{ADD_ITEM,actionAddItem};
