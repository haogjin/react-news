import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
export default class Root extends React.Component {

inc(){
	return {type :'ADD'};
}

dec(){
	return {type: 'SUB'};
}

componentDidMount(){
	//初始化，传递的参数是 reducer
	var store = createStore(reducer);

	console.log(store.getState());// 0

	// 触发方法
	store.dispatch(this.inc());
	console.log(store.getState());// 1

	store.dispatch(this.inc());
	console.log(store.getState());// 2

	store.dispatch(this.dec());
	console.log(store.getState());// 1

}

render() {
		return (
			<div>
				REDUX
			</div>
		);
	};
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
