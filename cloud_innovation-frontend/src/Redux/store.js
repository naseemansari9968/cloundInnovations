import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import `thunk` as a named export
import { authReducer } from './AuthReducer/reducer';
import { movieReducer } from './MovieReducer/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

