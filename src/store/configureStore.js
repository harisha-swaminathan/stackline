import { createStore, applyMiddleware } from 'redux';
import productsReducer from '../reducers/products';
import thunk from 'redux-thunk';

export default () => {
	const store = createStore(productsReducer, applyMiddleware(thunk));
	return store;
};
