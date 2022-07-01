import { createStore, combineReducers, applyMiddleware } from 'redux';
import isLoggedInReducer from './Reducers/isLoggedIn';
import dataReducer from './Reducers/dataReducer';
import usersReducer from './Reducers/usersReducer';
import cartReducer from './Reducers/cartReducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  isLoggedInX: isLoggedInReducer,
  loadData: dataReducer,
  loadUsers: usersReducer,
  cart: cartReducer,
});

export const store = createStore(allReducers, applyMiddleware(thunk));
