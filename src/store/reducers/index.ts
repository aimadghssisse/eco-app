import { combineReducers } from 'redux';
import productsReducers from "./productsReducers"

// this function use to store all state reducx in one store to get access in any component
const reducers = combineReducers({
    productsReducers
})

export default reducers;
