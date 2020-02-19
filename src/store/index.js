import { createStore, combineReducers, compose } from 'redux';
import { reducer as gameReducer } from '../Game/reducer';


const reducer = combineReducers({
    game: gameReducer
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

export default store;