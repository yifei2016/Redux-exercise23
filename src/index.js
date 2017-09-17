import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer,cartReducer,historyReducer,productReducer,catalogReducer} from './reducers';
//Redux is a terribly simple library for state management, 
//and has made working with React more manageable for everyone.

//redux and React are actually two separate 
//libraries which can and have been used completely independent of each other
let initialState = {
	tab:1,
	cart: [],// item{}, count
	history:[{type:''}],
	catalog:{
		products: [
			{ id:1,
				affiliation: 'Påsklakanset',
				name: 'Kaktus',
				price:149,
				ordinaryPrice:'249,-',
				img: 'https://www.hemtex.se/media/paslakan_gron_kaktus_145721800000001_normal.jpg'
			},{
				id:2,
				affiliation: 'Påsklakanset',
				name: 'Viken',
				price:249,
				ordinaryPrice:'349,-',
				img: 'https://www.hemtex.se/media/paslakan_bla_niwa_145773620000001_normal.jpg'
			},
			{
				id:3,
				affiliation: 'Påsklakanset',
				name: 'Monstera',
				price:249,
				ordinaryPrice:'289,-',
				img: 'https://s-media-cache-ak0.pinimg.com/236x/04/66/81/046681d520d344562a2f2a83c6a9bbde.jpg'
			},
			{
				id:4,
				affiliation: 'Påsklakanset',
				name: 'Sommar',
				price:349,
				ordinaryPrice:'449,-',
				img: 'http://www.aretrunt.se/wp-content/uploads/Hemtex-p%C3%A5slakan-430x474.png'
			},
			{
				id:5,
				affiliation: 'Handdukar',
				name: 'Yuji',
				price:49,
				ordinaryPrice:'69,-',
				img: 'https://s-media-cache-ak0.pinimg.com/564x/5d/1c/0b/5d1c0b247d5d26986aae9d713d048dc7.jpg'
			},
			{
				id:6,
				affiliation: 'Handdukar',
				name: 'Blommor',
				price:39,
				ordinaryPrice:'59,-',
				img: 'https://s-media-cache-ak0.pinimg.com/originals/2d/7b/6b/2d7b6b296b6d274296062117c619c46d.png'
			},
			{
				id:7,
				affiliation: 'Handdukar',
				name: 'Block',
				price:39,
				ordinaryPrice:'59,-',
				img: 'http://www.hemredigt.com/uploads/3/7/6/3/37631851/6972340.png?266'
			},
			{
				id:8,
				affiliation: 'Handdukar',
				name: 'Supersoft',
				price:69,
				ordinaryPrice:'79,-',
				img: 'https://www.hemtex.se/media/134995000000001_normal.jpg'
			}]
		}
	}

let rootReducer = combineReducers({
	tab:tabReducer,
	cart: cartReducer,
	history:historyReducer,
	catalog:catalogReducer
});
//combineReducers to create a single root reducer out of many.
const store = createStore(rootReducer, initialState);
//Creates a Redux store that holds the complete state tree of your app.
//There should only be a single store in your app.

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
////only components within the Provider can be connected 
////Provider is given the store as a prop
////Provider is a React component given to us by the “react-redux” library. 
//It serves just one purpose : to “provide” the store to its child components.
registerServiceWorker();
export {store};
