import { createStore, combineReducers } from 'redux';

import filterReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
 

const rootReducer = combineReducers({
  filterReducer,
  pizzasReducer,
});


const store = createStore(rootReducer);

export default store;
