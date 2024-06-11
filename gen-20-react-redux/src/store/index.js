import { combineReducers, createStore, compose } from 'redux';

import { cartReducer } from './reducer/cartReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;